'''
Started with https://github.com/nemanjastokuca/tiktok-downloader/blob/main/tiktok-downloader.py as a template.
random ukraine example: https://www.tiktok.com/@kharchuk.in/video/7068699049892891909
'''


from argparse import ArgumentParser
import os, subprocess # subprocess for ffmpeg
from urllib.parse import parse_qsl, urlparse
import requests

class TikTokDownloader:
    HEADERS = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'same-site',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Dest': 'video',
        'Referer': 'https://www.tiktok.com/',
        'Accept-Language': 'en-US,en;q=0.9,bs;q=0.8,sr;q=0.7,hr;q=0.6',
        'sec-gpc': '1',
        'Range': 'bytes=0-',
    }

    def __init__(self, url: str, web_id: str):
        self.__url = url
        self.__cookies = {
            'tt_webid': web_id,
            'tt_webid_v2': web_id
        }

    def __get_video_url(self) -> str:
        response = requests.get(self.__url, cookies=self.__cookies, headers=TikTokDownloader.HEADERS)
        # get url from the <script id="sigi-persisted-data"> tag in the response
        # just using string manipualation
        url_without_bad_unicode = response.text.split('"playAddr":"')[1].split('"')[0].replace(r'\u0026', '&').replace(r'\u002F', '/')

        return url_without_bad_unicode

    def __get_video_data(self, filename) -> str:
        result = subprocess.run(["ffprobe", "-v", "error", "-show_entries",
                             "format=duration", "-of",
                             "default=noprint_wrappers=1:nokey=1", filename],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT)

        return str(round(float(result.stdout.decode('utf8')), 2)) + ' (s)'

    def download(self, file_path: str):
        video_url = self.__get_video_url()
        print(f'web url:  {self.__url}')
        print(f'download: {video_url}\n')

        request = requests.Request(method='GET', url=video_url)

        prepared_request = request.prepare()
        session = requests.Session()
        response = session.send(request=prepared_request)
        response.raise_for_status()

        with open(os.path.abspath(file_path), 'wb') as output_file:
            output_file.write(response.content)
            print(f'output:   {file_path}')
            file_info = self.__get_video_data(file_path)
            print(f'info:     {file_info}')


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument('--web-id', help='Value of tt_webid or tt_webid_v2 cookie (they are the same).')
    parser.add_argument('-o', '--output', default=None, help='Full output path.')
    parser.add_argument('url', help='video url: https://www.tiktok.com/@username/video/1234567890123456789')
    args = parser.parse_args()

    # makes it like '1235678 username.mp4' if no -o arg is given
    username_video_id = args.url.split('@')[1].split('/')
    username, video_id = username_video_id[0], username_video_id[2] if not '?' in username_video_id[2] else username_video_id[2].split('?')[0]

    input_url = f'https://www.tiktok.com/@{username}/video/{video_id}'
    output = f'{video_id} {username}.mp4' if args.output is None else args.output
    print(input_url)

    downloader = TikTokDownloader(input_url, args.web_id)
    downloader.download(output)
