document.getElementById('saveImg').addEventListener('click', function() {
    var link = document.createElement('a');
    link.download = 'sc.png';
    link.href = document.getElementById('result').getAttribute('src');
    link.click();
});

document.getElementById('customWidth').addEventListener('input', function() {
    var width = document.getElementById('customWidth').value;
    document.getElementsByClassName('sc-card')[0].style.width = width + 'px';
});

document.getElementById('generate').addEventListener('click', function() {
    html2canvas(document.getElementById('sc-card'),{scale:10,backgroundColor:null}).then(function(canvas) {
        document.getElementById('result').setAttribute('src', canvas.toDataURL());
    });
    document.getElementById('output').classList.remove('hide');
});

document.getElementById('avatar').addEventListener('input', function() {
    var file = document.getElementById('avatar').files[0];
    var reader = new FileReader();
    reader.onload = function() {
        document.getElementById('avatar-img').setAttribute('src', reader.result);
    }
    reader.readAsDataURL(file);
});

document.getElementById('secondary-content-switch').addEventListener('input', function() {
    var is_on = document.getElementById('secondary-content-switch').checked;
    if (is_on) {
        document.getElementById('secondary-content').classList.remove('hide');
    } else {
        document.getElementById('secondary-content').classList.add('hide');
    }
});

document.getElementById('battery').addEventListener('input', function() {
    var battery = parseInt(document.getElementById('battery').innerHTML);
    if (battery < 500) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class0-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class0-body-bg)');
    }
    else if (battery < 1000 && battery >= 500) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class1-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class1-body-bg)');
    }
    else if (battery < 5000 && battery >= 1000) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class2-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class2-body-bg)');
    }
    else if (battery < 10000 && battery >= 5000) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class3-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class3-body-bg)');
    }
    else if (battery < 20000 && battery >= 10000) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class4-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class4-body-bg)');
    }
    else if (battery >= 20000) {
        document.documentElement.style.setProperty('--sc-head-bg', 'var(--class5-head-bg)');
        document.documentElement.style.setProperty('--sc-body-bg', 'var(--class5-body-bg)');
    }
});

document.getElementById('Rank').addEventListener('input', function() {
    var rank = document.getElementById('Rank').value;
    console.log(rank);
    if (rank == '0') {
        document.getElementById('avatar-border').classList.add('hide');
    }
    else if (rank == '1') {
        document.getElementById('avatar-border').classList.remove('hide');
        document.getElementById('avatar-border-img').setAttribute('src', './assets/BSC_舰长.webp');
    }
    else if (rank == '2') {
        document.getElementById('avatar-border').classList.remove('hide');
        document.getElementById('avatar-border-img').setAttribute('src', './assets/BSC_新提督.webp');
    }
    else if (rank == '3') {
        document.getElementById('avatar-border').classList.remove('hide');
        document.getElementById('avatar-border-img').setAttribute('src', './assets/BSC_总督.webp');
    }
});