import axios from 'axios';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Comentario } from '../models/comentario';

@Injectable({
    providedIn: 'root'
})
export class ServiceCubos {
    private apiUrl = environment.apiUrl;
    private token = environment.authToken;

    private createHeaders() {
        if (!this.token) {
            console.warn('El token no está definido.');
            return {};
        }
        return {
            Authorization: `Bearer ${this.token}`
        };
    }

    async getAllCubos(): Promise<any> {
        const url = `${this.apiUrl}api/Cubos`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los cubos:', error);
            throw new Error('No se pudieron obtener los cubos.');
        }
    }

    async getMarcas(): Promise<any> {
        const url = `${this.apiUrl}api/Cubos/Marcas`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener las marcas:', error);
            throw new Error('No se pudieron obtener las marcas.');
        }
    }

    async getCubosByMarca(marca: string): Promise<any> {
        const url = `${this.apiUrl}api/Cubos/CubosMarca/${marca}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los cubos por marca:', error);
            throw new Error('No se pudieron obtener los cubos por marca.');
        }
    }

    async getCuboById(id: number): Promise<any> {
        const url = `${this.apiUrl}api/Cubos/${id}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los detalles del cubo:', error);
            throw new Error('No se pudieron obtener los detalles del cubo.');
        }
    }

    async registrarUsuario(usuario: any): Promise<any> {
        const url = `${this.apiUrl}api/Manage/RegistroUsuario`;
        try {
            const response = await axios.post(url, usuario);
            return response.data;
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            throw new Error('No se pudo registrar al usuario.');
        }
    }

    async login(credentials: any): Promise<any> {
        const url = `${this.apiUrl}api/Manage/Login`;
        try {
            const response = await axios.post(url, credentials);
            this.token = response.data; // Guardamos el token
            environment.authToken = this.token; // Actualizamos en el environment
            return response.data;
        } catch (error) {
            console.error('Error al realizar login:', error);
            throw new Error('No se pudo realizar el login.');
        }
    }

    async getPerfilUsuario(): Promise<{ nombre: string; email: string }> {
        const url = `${this.apiUrl}api/Manage/PerfilUsuario`;
        try {
            const response = await axios.get(url, { headers: this.createHeaders() });
            return response.data;
        } catch (error) {
            console.error('Error al obtener el perfil del usuario:', error);
            throw new Error('No se pudo obtener el perfil del usuario.');
        }
    }

    async realizarPedido(idCubo: number): Promise<any> {
        const url = `${this.apiUrl}api/Compra/InsertarPedido/${idCubo}`;
        try {
            const response = await axios.post(url, null, { headers: this.createHeaders() });
            return response.data;
        } catch (error) {
            console.error('Error al realizar el pedido:', error);
            throw new Error('No se pudo realizar el pedido.');
        }
    }

    async getComprasUsuario(): Promise<any> {
        const url = `${this.apiUrl}api/Compra/ComprasUsuario`;
        try {
            const response = await axios.get(url, { headers: this.createHeaders() });
            return response.data;
        } catch (error) {
            console.error('Error al obtener las compras del usuario:', error);
            throw new Error('No se pudieron obtener las compras del usuario.');
        }
    }

    async getComentariosCubo(idCubo: number): Promise<Comentario[]> {
        const url = `${this.apiUrl}api/ComentariosCubo/GetComentariosCubo/${idCubo}`;
        try {
            const response = await axios.get<Comentario[]>(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener los comentarios del cubo:', error);
            throw new Error('No se pudieron obtener los comentarios del cubo.');
        }
    }

}
