import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup(){
        return "Signup successfully";
    }
    signin(){
        return "signin successfully";
    }
}