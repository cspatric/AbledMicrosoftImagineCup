var btnNotification = document.getElementById('btn-notification');
var btnStart = document.getElementById('btn-start');
var btnSetting = document.getElementById('btn-setting');
var notification = document.getElementById('notification');
var start = document.getElementById('start');
var setting = document.getElementById('setting');

btnNotification.addEventListener('click', function() {
    start.style.display = 'none';
    setting.style.display = 'none';
    notification.style.display = 'flex';
});

btnStart.addEventListener('click', function() {
    start.style.display = 'flex';
    setting.style.display = 'none';
    notification.style.display = 'none';
});

btnSetting.addEventListener('click', function() {
    start.style.display = 'none';
    setting.style.display = 'flex';
    notification.style.display = 'none';
});

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
