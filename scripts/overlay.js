
document.addEventListener("DOMContentLoaded", function () {
    hideOtherPages("tab-champs");
}, false);

document.getElementById("overlayArea").addEventListener("dblclick", function () {
    event.stopPropagation();
}, false);

document.getElementById("overlayArea").addEventListener("mouseout", function () {
    Hide();
}, false);

document.getElementById("overlayArea").addEventListener("mouseover", function () {
    Show();
}, false);

document.getElementById("tft-min").addEventListener("click", function () {
    ToggleStats(event);
}, false);

document.getElementById("tabChamps").addEventListener("click", function () {
    hideOtherPages("tab-champs", this);
}, false);

document.getElementById("tabDropRates").addEventListener("click", function () {
    hideOtherPages("tab-droprates", this);
}, false);

document.getElementById("tabItems").addEventListener("click", function () {
    hideOtherPages("tab-items", this);
}, false);

document.getElementById("btnTierVisibility1").addEventListener("click", function () {
    toggleTierVisibility('1', this);
}, false);
document.getElementById("btnTierVisibility2").addEventListener("click", function () {
    toggleTierVisibility('2', this);
}, false);
document.getElementById("btnTierVisibility3").addEventListener("click", function () {
    toggleTierVisibility('3', this);
}, false);
document.getElementById("btnTierVisibility4").addEventListener("click", function () {
    toggleTierVisibility('4', this);
}, false);
document.getElementById("btnTierVisibility5").addEventListener("click", function () {
    toggleTierVisibility('5', this);
}, false);

document.getElementById("btnChampImg").addEventListener("click", function () {
    toggleChampImg(this);
}, false);

document.getElementById("btnChampLabel").addEventListener("click", function () {
    toggleLabelVisibility('champ', this);
}, false);

document.getElementById("btnItemLabel").addEventListener("click", function () {
    toggleLabelVisibility('item', this);
}, false);

function hideOtherPages(visiblePage, self) {
    var ids = ["tab-champs", "tab-items", "tab-droprates"];
    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.display = "none";
    }
    document.getElementById(visiblePage).style.display = "block";
    if (self) {
        var elements = document.getElementsByClassName('tft-tab-active');
        while (elements.length > 0) {
            elements[0].classList.remove('tft-tab-active');
        }
        self.classList.add("tft-tab-active");
    }
}
var ContentOn = false;
function ToggleStats(event) {
    document.getElementById("tft-panel").style.visibility = "visible";
    if (document.getElementById("tft-panel").style.animationName != "tft-panel-show") {
        document.getElementById("tft-panel").style.animationName = "tft-panel-show";
        ContentOn = true;
    }
    else {
        document.getElementById("tft-panel").style.animationName = "tft-panel-hide";
        ContentOn = false;
    }
    event.stopPropagation();
}

function Hide() {
    document.getElementById("tft-panel").style.animationName = "tft-panel-hide";
}

function Show() {
    if (ContentOn == true) {
        document.getElementById("tft-panel").style.animationName = "tft-panel-show";
    }
}
function toggleTierVisibility(targetTier, self) {
    var champs = document.getElementsByClassName('tft-c-border-tier' + targetTier);
    if (Boolean['showTier' + targetTier] != true) {
        self.classList.remove('tft-c-tier' + targetTier);
        self.classList.add('e-c-black');
        self.classList.add('tft-c-bg-tier' + targetTier);
        for (var j = 0; j < champs.length; j++) {
            champs[j].parentNode.style.visibility = "hidden";
        }
    }
    else {
        for (var j = 0; j < champs.length; j++) {
            self.classList.remove('e-c-black');
            self.classList.add('tft-c-tier' + targetTier);
            self.classList.remove('tft-c-bg-tier' + targetTier);
            champs[j].parentNode.style.visibility = "visible";
        }
    }
    Boolean['showTier' + targetTier] = !Boolean['showTier' + targetTier];
}
function toggleChampImg(self) {
    var champImgs = document.getElementsByClassName('tft-champ');
    if (Boolean['show3dImg'] != true) {
        self.classList.remove('e-c-accent');
        self.classList.add('e-c-black');
        self.classList.add('e-c-bg-accent');
        for (var i = 0; i < champImgs.length; i++) {
            var str = champImgs[i].style.backgroundImage;
            var res = str.replace("champions", "champions_3d");
            champImgs[i].style.backgroundImage = res;
        }
    }
    else {
        self.classList.add('e-c-accent');
        self.classList.remove('e-c-black');
        self.classList.remove('e-c-bg-accent');
        for (var i = 0; i < champImgs.length; i++) {
            var str = champImgs[i].style.backgroundImage;
            var res = str.replace("champions_3d", "champions");
            champImgs[i].style.backgroundImage = res;
        }
    }
    Boolean['show3dImg'] = !Boolean['show3dImg'];
}

function toggleLabelVisibility(targetType, self) {
    var cells = document.getElementsByClassName('tft-' + targetType);
    if (Boolean['showLabel' + targetType] != true) {
        if (targetType == 'champ') {
            document.getElementById('btnChampImg').style.visibility = "hidden";
        }
        self.classList.remove('e-c-accent');
        self.classList.add('e-c-black');
        self.classList.add('e-c-bg-accent');
        for (var j = 0; j < cells.length; j++) {
            cells[j].style.backgroundSize = "0px 0px";
            cells[j].firstElementChild.classList.remove('hide');
            if (targetType == 'champ') {
                cells[j].classList.remove('tft-border-bottom-4px');
            }
        }
    }
    else {
        for (var j = 0; j < cells.length; j++) {
            if (targetType == 'champ') {
                document.getElementById('btnChampImg').style.visibility = "visible";
            }
            self.classList.remove('e-c-black');
            self.classList.add('e-c-accent');
            self.classList.remove('e-c-bg-accent');
            cells[j].style.backgroundSize = "cover";
            cells[j].firstElementChild.classList.add('hide');
            if (targetType == 'champ') {
                cells[j].classList.add('tft-border-bottom-4px');
            }
        }
    }
    Boolean['showLabel' + targetType] = !Boolean['showLabel' + targetType];
}