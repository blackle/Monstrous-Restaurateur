var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("util/QueuedPainter", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueuedPainter;
    return {
        setters: [],
        execute: function () {
            QueuedPainter = (function () {
                function QueuedPainter() {
                    this.queuedImages = new Array();
                }
                QueuedPainter.prototype.push = function (img) {
                    this.queuedImages.push(img);
                };
                QueuedPainter.prototype.paint = function (ctx) {
                    this.pumpQueue(ctx, 0);
                };
                QueuedPainter.prototype.pumpQueue = function (ctx, index) {
                    if (this.queuedImages.length <= index) {
                        return;
                    }
                    var img = this.queuedImages[index];
                    var drawFunc = function () {
                        ctx.drawImage(img, 0, 0, 600, 600);
                    };
                    if (img.complete) {
                        drawFunc();
                        this.pumpQueue(ctx, index + 1);
                    }
                    else {
                        var that_1 = this;
                        img.onload = function () {
                            drawFunc();
                            that_1.pumpQueue(ctx, index + 1);
                        };
                    }
                };
                QueuedPainter.prototype.abort = function () {
                    for (var _i = 0, _a = this.queuedImages; _i < _a.length; _i++) {
                        var img = _a[_i];
                        delete img.onload;
                    }
                    this.queuedImages.length = 0;
                };
                return QueuedPainter;
            }());
            exports_1("QueuedPainter", QueuedPainter);
        }
    };
});
System.register("model/SceneBase", ["util/QueuedPainter"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var QueuedPainter_1, SceneBase;
    return {
        setters: [
            function (QueuedPainter_1_1) {
                QueuedPainter_1 = QueuedPainter_1_1;
            }
        ],
        execute: function () {
            SceneBase = (function () {
                function SceneBase() {
                    this.qp = new QueuedPainter_1.QueuedPainter();
                }
                return SceneBase;
            }());
            exports_2("SceneBase", SceneBase);
        }
    };
});
System.register("model/Scene", ["model/SceneBase"], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var SceneBase_1, Scene;
    return {
        setters: [
            function (SceneBase_1_1) {
                SceneBase_1 = SceneBase_1_1;
            }
        ],
        execute: function () {
            Scene = (function (_super) {
                __extends(Scene, _super);
                function Scene() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Scene;
            }(SceneBase_1.SceneBase));
            exports_3("Scene", Scene);
        }
    };
});
System.register("scenes/Erina", ["model/Scene"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Scene_1, Erina;
    return {
        setters: [
            function (Scene_1_1) {
                Scene_1 = Scene_1_1;
            }
        ],
        execute: function () {
            Erina = (function (_super) {
                __extends(Erina, _super);
                function Erina() {
                    var _this = _super.call(this) || this;
                    _this.bg = new Image();
                    _this.bg.src = "./img/erina/background.png";
                    _this.erina_one = new Image();
                    _this.erina_one.src = "./img/erina/erina_one.png";
                    return _this;
                }
                Erina.prototype.namespace = function () {
                    return "erina";
                };
                Erina.prototype.draw = function (ctx) {
                    this.qp.push(this.bg);
                    this.qp.push(this.erina_one);
                    this.qp.paint(ctx);
                };
                return Erina;
            }(Scene_1.Scene));
            exports_4("Erina", Erina);
        }
    };
});
System.register("main/main", ["scenes/Erina"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var Erina_1;
    return {
        setters: [
            function (Erina_1_1) {
                Erina_1 = Erina_1_1;
            }
        ],
        execute: function () {
            document.addEventListener("DOMContentLoaded", function () {
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext('2d');
                var erina = new Erina_1.Erina();
                console.log(erina.namespace());
                erina.draw(ctx);
            });
        }
    };
});
//# sourceMappingURL=main.js.map