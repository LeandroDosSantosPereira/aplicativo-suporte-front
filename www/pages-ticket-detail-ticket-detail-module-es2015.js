(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ticket-detail-ticket-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-detail/ticket-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-detail/ticket-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ticket Detalhe</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Inicio do Card -->\r\n<ion-content fullscreen=\"true\"> \r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"ticketCards.photo\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>{{ticketCards.name}}</h3>\r\n        <p>{{ticketCards.date}}</p>\r\n      </ion-label>\r\n    </ion-item>  \r\n    <img [src]=\"ticketCards.image\" alt=\"ion\">\r\n    <ion-card-header>\r\n      <p>TICKET ID - {{ticketCards.id}}</p>\r\n      <ion-card-title>{{ticketCards.title}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      {{ticketCards.text}}\r\n    </ion-card-content>\r\n    <!-- Botões do card -->\r\n    <ion-footer>\r\n      <ion-row>\r\n        <ion-col center text-center>\r\n          <button (click)=\"approve()\">\r\n            <ion-icon class=\"icon\" name=\"thumbs-up\"></ion-icon>\r\n            <div>Aprovado</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-center>\r\n          <button (click)= \"disapprove()\">\r\n            <ion-icon class=\"icon\" name=\"thumbs-down\"></ion-icon>\r\n            <div>Desaprovado</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col center text-center>\r\n          <!-- <button (click)=\"hideComment('commntDiv')\"> -->\r\n          <button>\r\n            <ion-icon class=\"icon\" name=\"chatbubbles\"></ion-icon>\r\n            <div>{{comments.length}} Comentários</div>\r\n          </button>\r\n        </ion-col>       \r\n      </ion-row>\r\n    </ion-footer>\r\n  </ion-card>\r\n<!-- Fim do card -->\r\n\r\n<!-- Início dos inputs de comentário e Botões de envio -->\r\n  <ion-item >\r\n    <ion-input placeholder=\"Digite seu comentário\"  [(ngModel)]=\"data.text\" name=\"text\" ></ion-input>\r\n    <div class=\"input--file\" >\r\n      <span>\r\n        <ion-icon class=\"icon\" name=\"camera\"></ion-icon>\r\n      </span>\r\n      <input (change)=\"handleInputChange($event)\" name=\"imageUrl\" type=\"file\" />\r\n    </div>\r\n\r\n    <button  (click)=\"createComment()\">\r\n      <ion-icon class=\"icon\" name=\"send\"></ion-icon>\r\n    </button>    \r\n  </ion-item>\r\n  <!-- Fim inputs de comentário e Botões de envio -->\r\n  \r\n  <!-- Card de Comentários -->\r\n  <div id=\"commntDiv\">\r\n    <ion-card  *ngFor=\"let comment of comments\">\r\n      <ion-item >\r\n        <ion-avatar slot=\"start\">\r\n          <img [src]=\"comment.photo\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>{{comment.name}}</h3>\r\n          <p>{{comment.date}}</p>\r\n        </ion-label>\r\n      </ion-item> \r\n      <div *ngIf=\"comment.image != null\">\r\n        <img [src]= \"link.urlconnection + comment.image\" alt=\"ion\">\r\n     </div>\r\n      <ion-card-content>\r\n        <h3 style=\"color: black;\">{{comment.text}}</h3>\r\n      </ion-card-content>    \r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/comment.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/comment.service.ts ***!
  \*****************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _connectionurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionurl */ "./src/app/auth/connectionurl.ts");





let CommentService = class CommentService {
    //   tickets: any
    constructor(http) {
        this.http = http;
        //Recebe a url da classe ConnectionUrl
        this.link = new _connectionurl__WEBPACK_IMPORTED_MODULE_4__["ConnectionUrl"]();
        //Concatena com a rota
        this.url = this.link.urlconnection + 'api/v1/comments';
        // Do this on service. But for this demo lets do here
        this.token = localStorage.getItem('token');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: 'Bearer ' + this.token
        });
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    // Pega a lista de todos os comentários
    getCommentsList() {
        return new Promise(resolve => {
            this.http.get(this.url, { headers: this.headers }).subscribe(data => {
                resolve(data);
                // return data;
            }, err => {
                console.log(err);
            });
        });
    }
    //Método que cria um comentário
    create(cmt) {
        this.httpOptions.headers =
            this.httpOptions.headers.set('Authorization', this.token);
        return this.http.post(`${this.url}`, cmt, this.httpOptions);
    }
    // Busca um ticket pelo id
    getCommentItem(id) {
        return new Promise(resolve => {
            this.http.get(this.url + '/' + id, { headers: this.headers }).subscribe(data => {
                resolve(data);
                this.comments = data;
            }, err => {
                console.log(err);
            });
        });
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CommentService);



/***/ }),

/***/ "./src/app/pages/ticket-detail/ticket-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ticket-detail/ticket-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TicketDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPageRoutingModule", function() { return TicketDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ticket_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-detail.page */ "./src/app/pages/ticket-detail/ticket-detail.page.ts");




const routes = [
    {
        path: '',
        component: _ticket_detail_page__WEBPACK_IMPORTED_MODULE_3__["TicketDetailPage"]
    }
];
let TicketDetailPageRoutingModule = class TicketDetailPageRoutingModule {
};
TicketDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TicketDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ticket-detail/ticket-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ticket-detail/ticket-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: TicketDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPageModule", function() { return TicketDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ticket_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-detail-routing.module */ "./src/app/pages/ticket-detail/ticket-detail-routing.module.ts");
/* harmony import */ var _ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-detail.page */ "./src/app/pages/ticket-detail/ticket-detail.page.ts");







let TicketDetailPageModule = class TicketDetailPageModule {
};
TicketDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ticket_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TicketDetailPageRoutingModule"]
        ],
        declarations: [_ticket_detail_page__WEBPACK_IMPORTED_MODULE_6__["TicketDetailPage"]]
    })
], TicketDetailPageModule);



/***/ }),

/***/ "./src/app/pages/ticket-detail/ticket-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/ticket-detail/ticket-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: transparent;\n}\n\n.icon {\n  color: #919191;\n  font-size: 20px;\n}\n\nbutton:focus {\n  box-shadow: 0 0 0 0;\n  border: 0 none;\n  outline: 0;\n}\n\n.input--file {\n  position: relative;\n  color: #7f7f7f;\n}\n\n.input--file input[type=file] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGlja2V0LWRldGFpbC9DOlxcVXNlcnNcXGxlYW5kXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcRGV2ZWxvcG1lbnRcXGFwbGljYXRpdm8tdGhlLXN1cG9ydGUvc3JjXFxhcHBcXHBhZ2VzXFx0aWNrZXQtZGV0YWlsXFx0aWNrZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBjb2xvcjojOTE5MTkxO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMgeyAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbn0gXHJcblxyXG5cclxuLmlucHV0LS1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjN2Y3ZjdmO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtLWZpbGUgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gICIsImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiAjOTE5MTkxO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIGJvcmRlcjogMCBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uaW5wdXQtLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjN2Y3ZjdmO1xufVxuXG4uaW5wdXQtLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/ticket-detail/ticket-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ticket-detail/ticket-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: TicketDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailPage", function() { return TicketDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_currentuser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/currentuser */ "./src/app/auth/currentuser.ts");
/* harmony import */ var _auth_formatdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth/formatdate */ "./src/app/auth/formatdate.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/ticket.service */ "./src/app/auth/ticket.service.ts");
/* harmony import */ var _auth_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/comment.service */ "./src/app/auth/comment.service.ts");
/* harmony import */ var _auth_connectionurl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/connectionurl */ "./src/app/auth/connectionurl.ts");









let TicketDetailPage = class TicketDetailPage {
    constructor(ticketService, route, authService, commentService) {
        this.ticketService = ticketService;
        this.route = route;
        this.authService = authService;
        this.commentService = commentService;
        this.ticketCards = { id: '', title: '', name: '', created_at: '', photo: '', image: '', text: '' };
        this.data = { text: '', ticket_id: '' };
        this.formatDate = new _auth_formatdate__WEBPACK_IMPORTED_MODULE_2__["FormatDate"]();
        this.link = new _auth_connectionurl__WEBPACK_IMPORTED_MODULE_8__["ConnectionUrl"]();
        this.imageSrc = '';
        this.img = '';
        this.current = new _auth_currentuser__WEBPACK_IMPORTED_MODULE_1__["CurrentUser"]();
        this.comments = new Array();
    }
    ngOnInit() {
        this.createCardTickets();
    }
    //Cria o Ticket de cards na view
    createCardTickets() {
        // Recebe o id vindo da url 
        this.ticketId = parseInt(this.route.snapshot.paramMap.get('id'));
        //Pega o id logado para cadastrar o comentário
        this.id = this.current.getUser();
        // Chama a função da classe ticketService que retorna o ticket pelo id 
        this.ticketService.getItemTicket(this.ticketId).then(response => {
            this.ticket = response;
            // Chama a função da classe ticketService que retorna o usuário pelo id 
            this.authService.getItem(this.ticket.user_id).then(response => {
                this.user = response;
                //Seta valores no objeto ticketCards do card da View 
                this.ticketCards = {
                    photo: this.link.urlconnection + this.user.photo.url,
                    name: this.user.name,
                    id: this.ticket.id,
                    title: this.ticket.title,
                    text: this.ticket.text,
                    date: this.formatDate.format(this.ticket.created_at),
                    image: this.link.urlconnection + Object.values(this.ticket.image)[0]
                };
            });
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Limpa a lista
            this.comments = new Array();
            // Pega a lista de comentários da classe CommentService
            this.commentService.getCommentsList().then(response => {
                this.commentdata = response;
                // Laço do tamanho da lista de tickets chama o metodo getItem da classe authService buscando o usuário pelo id 
                for (let i = 0; i < this.commentdata.length; i++) {
                    this.authService.getItem(this.commentdata[i].user_id).then(response => {
                        this.users = response;
                        //     // Compara se o usuário logado está no ticket como remetente ou destinatário do ticket
                        if (this.ticketId == Object.values(this.commentdata[i])[2]) {
                            // console.log(Object.values(this.commentdata[i])[5])             
                            // Seta valores no objeto ticket
                            this.getComments = {
                                photo: this.link.urlconnection + this.users.photo.url,
                                name: this.users.name,
                                image: this.commentdata[i].image.url,
                                text: this.commentdata[i].text,
                                date: this.formatDate.format(this.commentdata[i].created_at)
                            };
                            // Adiciona o objeto getComments no Array
                            this.comments.push(this.getComments);
                        }
                    });
                }
            });
            console.log(this.comments);
        });
    }
    //Método que pega imagem do input file e convete em base 64 e guarda na variável imageSrc 
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('Formato inválido');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        this.img = this.imageSrc;
    }
    //Metodo para cadastrar comentário
    createComment() {
        // Cria um objeto Comment
        this.comment = {
            comment: {
                ticket_id: this.ticket.id,
                text: this.data.text,
                image: this.img,
                user_id: this.id
            }
        };
        // Envia o objeto ticket para o método create da classe ticketService
        this.commentService.create(this.comment).subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ionViewWillEnter();
            // alert("Comentário salvo!!")
        }));
        this.data = { text: '', ticket_id: '' };
        //fINAL
    }
    // Esconde comentários
    // hideComment(el) {
    //   let display = document.getElementById(el).style.display;
    //   if (display == "none") {
    //     document.getElementById(el).style.display = 'block';
    //   }
    //   else {
    //     document.getElementById(el).style.display = 'none';
    //     console.log("Fechou")
    //   }
    // }
    approve() {
        this.ticket.approval = true;
        //  Envia o id e o usuário para o método updateItem para a classe authService
        this.ticketService.updateItem(this.ticketId, this.ticket).subscribe(response => {
            console.log(this.ticket);
            alert("Curtiu");
        });
    }
    disapprove() {
        this.ticket.approval = false;
        //Envia o id e o usuário para o método updateItem para a classe authService
        this.ticketService.updateItem(this.ticketId, this.ticket).subscribe(response => {
            console.log(this.ticket);
            alert("Não curtiu");
        });
    }
};
TicketDetailPage.ctorParameters = () => [
    { type: _auth_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _auth_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"] }
];
TicketDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-ticket-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticket-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ticket-detail/ticket-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ticket-detail.page.scss */ "./src/app/pages/ticket-detail/ticket-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _auth_comment_service__WEBPACK_IMPORTED_MODULE_7__["CommentService"]])
], TicketDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-ticket-detail-ticket-detail-module-es2015.js.map