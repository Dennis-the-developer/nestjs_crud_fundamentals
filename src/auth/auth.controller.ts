import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    Signup(){
        return this.authService.signup();
    }

    @Post('signin')
    Signin(){
        return this.authService.signin();
    }
}