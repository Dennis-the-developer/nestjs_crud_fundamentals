import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    Signup(
        @Body('email') email: string,
        @Body('password', ParseIntPipe) password: string
    ){
        console.log(
            
        )
        return this.authService.signup();
    }

    @Post('signin')
    Signin(){
        return this.authService.signin();
    }
}