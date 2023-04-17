WebFont.load({
    google: {
        families: ['Poppins:800','Almarai:800']
    }
});

function kartuNama() {
    return {
        nama: '',
        size: 'feed',


        drawKartuNama() {
    const canvas = document.getElementById('kartuNamaCanvas');
    const ctx = canvas.getContext('2d');
    const bgImageStory = document.getElementById('bgImageStory');
    const bgImageFeed = document.getElementById('bgImageFeed');
    const bgImageStoryArabic = document.getElementById('bgImageStoryArabic');
    const bgImageFeedArabic = document.getElementById('bgImageFeedArabic');
    const { width, height } = this.getCanvasSize();

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    switch (this.size) {
        case 'story':
            ctx.drawImage(bgImageStory, 0, 0, width, height);
            break;
        case 'feed':
            ctx.drawImage(bgImageFeed, 0, 0, width, height);
            break;
        case 'storyArab':
            ctx.drawImage(bgImageStoryArabic, 0, 0, width, height);
            break;
        case 'feedArab':
            ctx.drawImage(bgImageFeedArabic, 0, 0, width, height);
            break;
    }

// Buat objek gradien linear
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

// Tambahkan titik-titik warna (color stops) ke objek gradien
gradient.addColorStop(0, '#754B00');
gradient.addColorStop(0.2448, '#D48C0C');
gradient.addColorStop(0.4714, '#754B00');
gradient.addColorStop(0.7448, '#D48C0C');
gradient.addColorStop(1, '#754B00');

// Terapkan gradien pada ctx.fillStyle
ctx.fillStyle = gradient;
    
    ctx.font = this.size === 'story' ? '800 60px Poppins' :
           this.size === 'feed' ? '800 45px Poppins' :
           this.size === 'storyArab' ? '800 60px Almarai' :
           this.size === 'feedArab' ? '800 45px Almarai' :
           ''; // default value if none of the conditions match
ctx.textAlign = 'center';
ctx.textBaseline = 'top';
const paddingLeft = 530;
let paddingTop;

switch (this.size) {
case 'story':
    paddingTop = 1430;
    break;
case 'feed':
    paddingTop = 930;
    break;
case 'storyArab':
    paddingTop = 1570; // Adjust this value as needed
    break;
case 'feedArab':
    paddingTop = 970; // Adjust this value as needed
    break;
}

ctx.fillText(this.nama, paddingLeft, paddingTop);

this.updatePreview();
},
bagikanKartuNama() {
if (!navigator.share) {
alert('Fitur ini tidak didukung di peramban Anda.');
return;
}

this.updatePreview();
const canvas = document.getElementById('kartuNamaCanvas');
canvas.toBlob(async blob => {
try {
    await navigator.share({
        title: `${this.nama} - Kartu Tahniah`,
        text: 'تقبل الله منا و منكم :',
        files: [new File([blob], `${this.nama}.png`, { type: 'image/png' })],
    });
} catch (error) {
    console.error('Error saat berbagi kartu nama:', error);
    alert('Terjadi kesalahan saat berbagi kartu tahniah.');
}
}, 'image/png');
},
        unduhKartuNama() {
            this.updatePreview();
            const canvas = document.getElementById('kartuNamaCanvas');
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `${this.nama}.png`;
            link.click();
        },
        getCanvasSize() {
    if (this.size === 'story' || this.size === 'storyArab') {
        return { width: 1080, height: 1920 };
    } else {
        return { width: 1080, height: 1080 };
    }
},
        updatePreview() {
            const canvas = document.getElementById('kartuNamaCanvas');
            const preview = document.getElementById('previewKartuNama');
            const scaleFactor = this.getPreviewScaleFactor();

            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width * scaleFactor;
            tempCanvas.height = canvas.height * scaleFactor;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);

            preview.src = tempCanvas.toDataURL('image/png');
        },
        getPreviewScaleFactor() {
            if (this.size === 'story' || this.size === 'storyArab') {
                return 0.25; // 50% dari ukuran asli
            } else {
                return 900 / 1080; // 400px lebar untuk IG Feed
            }
        },
    };
}