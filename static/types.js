var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var count = {
    nums: 0
};
var Human = /** @class */ (function () {
    function Human(name, gender) {
        var _this = this;
        count.nums += 1;
        this.name = name;
        this.gender = gender;
        this.id = count.nums;
        var mainR = document.getElementById('main-row');
        var row = document.createElement('div');
        row.classList.add('col-lg-3');
        row.innerHTML = 'a';
        switch (this.gender) {
            case 'boy':
                row.innerHTML = "<div class=\"char-boy\">" +
                    ("<img class = \"img-boy\" src=\"static/images/boy-walk.png\" alt=\"\", id = \"" + String(count.nums) + "\"  >") +
                    "</div>";
                mainR === null || mainR === void 0 ? void 0 : mainR.appendChild(row);
                break;
            case 'girl':
                // let row2 = document.createElement('div');
                // row2.classList.add('col-lg-3')
                row.innerHTML = "<div class=\"char-girl\">" +
                    ("<img class = \"img-girl\" src=\"static/images/girl-walk.png\" alt=\"\" id = " + count.nums + ">") +
                    "</div>";
                mainR === null || mainR === void 0 ? void 0 : mainR.appendChild(row);
                break;
            default:
                break;
        }
        row.onclick = function () {
            console.log(_this.id, _this.gender);
            ChangeMove(_this.gender, String(_this.id));
        };
    }
    return Human;
}());
var Boys = /** @class */ (function (_super) {
    __extends(Boys, _super);
    function Boys(name) {
        return _super.call(this, name, 'boy') || this;
    }
    return Boys;
}(Human));
var Girls = /** @class */ (function (_super) {
    __extends(Girls, _super);
    function Girls(name) {
        return _super.call(this, name, 'girl') || this;
    }
    return Girls;
}(Human));
var ChangeMove = function (gend, id) {
    var tempElement = document.getElementById(id);
    switch (gend) {
        case 'boy':
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.setAttribute('src', 'static/images/boy-jump.png');
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.remove('img-boy');
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.add('img-boy-jump');
            setTimeout(function () {
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.setAttribute('src', 'static/images/boy-walk.png');
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.remove('img-boy-jump');
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.add('img-boy');
            }, 900);
            break;
        case 'girl':
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.setAttribute('src', 'static/images/girl-jump.png');
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.remove('img-girl');
            tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.add('img-girl-jump');
            setTimeout(function () {
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.setAttribute('src', 'static/images/girl-walk.png');
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.remove('img-girl-jump');
                tempElement === null || tempElement === void 0 ? void 0 : tempElement.classList.add('img-girl');
            }, 900);
            break;
        default:
            break;
    }
};
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var sel = document.querySelector('#select-gender');
    console.log(sel.value);
    switch (sel.value) {
        case 'boy':
            new Boys('');
            break;
        case 'girl':
            new Girls('');
            break;
        default:
            break;
    }
});
new Boys('');
new Girls(' ');
// document.querySelectorAll('button').forEach(v=>{
//     v.addEventListener('click', (e) =>{
//         console.log((e))
//     })
// })
