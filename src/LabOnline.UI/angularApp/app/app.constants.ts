import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = './';

    public IdTypes: Array<Object> = [
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

    public UserTypes: Array<Object> = [
        { 'code': 'S', 'name': 'Consola de Administracion' },
        { 'code': 'E', 'name': 'Empresa' },
        { 'code': 'M', 'name': 'Medico Remitente' },
        { 'code': 'P', 'name': 'Paciente' }
    ];
}