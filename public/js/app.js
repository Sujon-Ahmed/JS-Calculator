$(document).ready(function () {
    $('#one').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '1';
    });
    $('#two').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '2';
    });
    $('#three').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '3';
    });
    $('#four').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '4';
    });
    $('#five').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '5';
    });
    $('#six').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '6';
    });
    $('#seven').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '7';
    });
    $('#eight').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '8';
    });
    $('#nine').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '9';
    });
    $('#plus').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '+';
    });
    $('#minus').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '-';
    });
    $('#division').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '/';
    });
    $('#multiple').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '*';
    });
    $('#dot').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '.';
    });
    $('#zero').click(function (e) {
        e.preventDefault();
        document.forms.display.value += '0';
    });
    $('#equal').click(function (e) {
        e.preventDefault();
        if (display.value == '') {
            alert('please enter any number to calculate');
        } else {
            document.forms.display.value = eval(document.forms.display.value);
        }
    });
    $('#clear').click(function (e) {
        e.preventDefault();
        document.forms.display.value = '';
    });

});