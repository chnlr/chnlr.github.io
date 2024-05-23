<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Assets</title>
    <link rel="icon" href="infofav.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets.css">
</head>
<body>
    <div class="top-menu">
        <a href="https://chahanler.com/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
    </div>
    <div class="content-wrapper">
        <div class="header">
            <h1>Custom Assets</h1>
        </div>
        <div class="content">
            <div class="description-box">
                <p>Transform your online presence with bespoke, visually captivating streaming assets. Each design is meticulously crafted, ensuring it uniquely enhances your brand. From inception to final touches, expect a swift and seamless delivery, ranging from just two days to a week.</p>
            </div>
            <div class="asset-gallery">
                <img src="coffeetalk.png" alt="Coffeetalk Asset" onclick="openModal(this);">
                <img src="username.png" alt="Username Asset" onclick="openModal(this);">
                <div class="purchase-box">
                    <p>You can buy these <a href="https://chahanler.gumroad.com/l/CoffeeTalk" target="_blank">here</a>.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="myModal" class="modal">
        <span class="close" onclick="closeModal()">&times;</span>
        <img class="modal-content" id="modalImage">
        <div id="caption"></div>
    </div>
    <script src="app.js"></script>
</body>
</html>
