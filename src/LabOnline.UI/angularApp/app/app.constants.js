var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var Configuration = (function () {
    function Configuration() {
        this.Server = './';
        this.IdTypes = [
            { 'code': 'AS', 'name': 'Adulto sin Identificacion' },
            { 'code': 'CC', 'name': 'Cedula de Ciudadania' },
            { 'code': 'CE', 'name': 'Cedula de Extranjeria' },
            { 'code': 'NT', 'name': 'NIT' },
            { 'code': 'NU', 'name': 'Numero Unico de Identificacion' },
            { 'code': 'MS', 'name': 'Menor sin Identificacion' },
            { 'code': 'IN', 'name': 'Paciente Investigacion' },
            { 'code': 'PA', 'name': 'Pasaporte' },
            { 'code': 'RC', 'name': 'Registro Civil' },
            { 'code': 'TI', 'name': 'Tarjeta de Identidad' }
        ];
        this.UserTypes = [
            { 'code': 'S', 'name': 'Consola de Administracion' },
            { 'code': 'E', 'name': 'Empresa' },
            { 'code': 'M', 'name': 'Medico Remitente' },
            { 'code': 'P', 'name': 'Paciente' }
        ];
    }
    return Configuration;
}());
Configuration = __decorate([
    Injectable()
], Configuration);
export { Configuration };
