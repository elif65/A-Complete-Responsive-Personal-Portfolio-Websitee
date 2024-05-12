// script.js
<script>
    document.addEventListener('DOMContentLoaded', function() { }
    var showImagesLinks = document.querySelectorAll('.show-images');

    showImagesLinks.forEach(function(link) {link.addEventListener('click', function (event) {
        event.preventDefault();

        var imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Önceki görselleri temizle
        imageContainer.classList.remove('hidden'); // Container'ı göster

        var images = [
            'image/gorsel1.png',
            'image/gorsel2.png',
            'image/gorsel3.png',
            'image/gorsel4.png',
            'image/gorsel5.png',
            'image/gorsel6.png'
            // Göstermek istediğiniz diğer görselleri buraya ekleyin
        ];

        images.forEach(function (imageSrc) {
            var imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.classList.add('image');
            imageContainer.appendChild(imageElement);
        });

        // Görsel container'ının konumunu sayfanın ortasına al
        imageContainer.style.top = window.innerHeight / 2 - imageContainer.offsetHeight / 2 + 'px';
        imageContainer.style.left = window.innerWidth / 2 - imageContainer.offsetWidth / 2 + 'px';

        // Sayfa boyutu değiştiğinde görsel container'ının konumunu güncelle
        window.addEventListener('resize', function () {
            imageContainer.style.top = window.innerHeight / 2 - imageContainer.offsetHeight / 2 + 'px';
            imageContainer.style.left = window.innerWidth / 2 - imageContainer.offsetWidth / 2 + 'px';
        });
    })});

</script>;
