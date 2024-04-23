btnnotification.getElementById('btn-notification').addEventListener('click', function() {
    start.getElementById('start').style.display = 'none';
    setting.getElementById('setting').style.display = 'none';
    notification.getElementById('notification').style.display = 'flex';
});

btnstart.getElementById('btn-start').addEventListener('click', function() {
    start.getElementByIc('start').style.display = 'flex';
    setting.getElementById('setting').style.display = 'none';
    notification.getElementById('notification').style.display = 'none';
});

btnsetting.getElementById('btn-setting').addEventListener('click', function() {
    start.getElementById('start').style.display = 'none';
    setting.getElementById('setting').style.display = 'flex';
    notification.getElementById('notification').style.display = 'none';
});
