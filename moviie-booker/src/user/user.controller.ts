import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody  } from '@nestjs/swagger';
import { RegisterDto, LoginDto } from './dto/users.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/login')
    @ApiOperation({ summary: 'Login a user' })
    @ApiResponse({ status: 200, description: 'User logged in successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiBody({ type: LoginDto })
    login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
    }

    @Post('/register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201 , description: 'User registered successfully' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiBody({ type: RegisterDto })
    register(@Body() registerDto: RegisterDto) {
    return this.userService.register(registerDto);
    }
}
