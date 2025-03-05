import { TilCardType } from '../types'

export const dataBack: TilCardType[] = [
	{
		id: 0,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - main.ts',
		content: (
			<div>
				<h3>main.ts (애플리케이션 진입점)</h3>
				<pre>
					{`
NestJS 애플리케이션을 실행하는 역할.
bootstrap() 함수에서 애플리케이션을 초기화.

--------------------------------------------------

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
`}
				</pre>
			</div>
		),
	},
	{
		id: 1,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - app.module.ts',
		content: (
			<div>
				<h3>app.module.ts (최상위 모듈)</h3>
				<pre>
					{`
애플리케이션의 핵심 모듈.
컨트롤러, 서비스 등을 모듈로 등록.

--------------------------------------------------

nest g mo

--------------------------------------------------

import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
`}
				</pre>

				<h3>Module</h3>
				<pre>
					{`
NestJS 애플리케이션을 구성하는 기본 단위.
관련된 컨트롤러, 서비스, 기타 기능을 하나의 모듈로 묶음.
@Module() 데코레이터를 사용하여 정의.

--------------------------------------------------

import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({})
export class MoviesModule {
  controllers: [MoviesController];
  providers: [MoviesService];
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 2,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - Controller',
		content: (
			<div>
				<h3>Controller</h3>
				<pre>
					{`
클라이언트의 요청을 받아서 처리하는 역할.
@Controller() 데코레이터를 사용하여 정의.
@Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All() 등

--------------------------------------------------

nest g co

--------------------------------------------------

import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  home() {
    return 'Welcome to my movie API';
  }
}

--------------------------------------------------

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 3,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - Service',
		content: (
			<div>
				<h3>Service</h3>
				<pre>
					{`
비즈니스 로직을 처리하는 역할.
@Injectable() 데코레이터를 사용하여 의존성 주입 가능.
컨트롤러에서 호출하여 데이터를 가공하거나 데이터베이스와 상호작용.

--------------------------------------------------

nest g s

--------------------------------------------------

import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 4,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - Class',
		content: (
			<div>
				<h3>Service</h3>
				<pre>
					{`
NestJS에서는 컨트롤러, 서비스, 엔터티 등 대부분이 클래스로 정의됨.
객체지향적인 개발을 가능하게 함.
`}
				</pre>
			</div>
		),
	},
	{
		id: 5,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'Structure - Injectable',
		content: (
			<div>
				<h3>@Injectable() (의존성 주입)</h3>
				<pre>
					{`
서비스나 특정 클래스를 다른 곳에서 사용할 수 있도록 주입하는 기능.
@Injectable() 데코레이터를 추가하면 NestJS에서 자동으로 의존성을 관리.

--------------------------------------------------

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return '유저 정보';
  }
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 6,
		date: '14/02/2025',
		tags: ['NestJS', 'Backend'],
		title: 'PUT vx PATCH',
		content: (
			<div>
				<h3>PUT vx PATCH</h3>
				<pre>
					{`
PUT → 리소스를 완전히 대체해야 할 때 사용
PATCH → 특정 필드만 부분 수정할 때 사용

--------------------------------------------------

import { Controller, Put, Patch, Param, Body } from '@nestjs/common';

@Controller('users')
export class UserController {
// PUT: 전체 업데이트
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return "유저 $ {id}의 정보를 전체 업데이트: $ {JSON.stringify(updateUserDto)}";
  }

// PATCH: 부분 업데이트
  @Patch(':id')
  partialUpdateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return "유저 $ {id}의 일부 정보를 업데이트: $ {JSON.stringify(updateUserDto)}";
  }
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 7,
		date: '14/02/2025',
		tags: ['DTO', 'class-validator', 'class-transformer', 'NestJS', 'Backend'],
		title: 'DTO (Data Transfer Object)',
		content: (
			<div>
				<h3>DTO가 필요한 이유</h3>
				<pre>
					{`
데이터 유효성 검사 : 잘못된 데이터를 방지 (예: 이메일 형식이 올바르지 않거나 필수 값이 빠진 경우).
타입 안정성 보장 : TypeScript의 타입을 활용해 오류를 줄임.
보안 강화 : 요청 객체를 직접 사용하지 않고 DTO를 거쳐서 데이터 조작을 방지.
코드 가독성 & 유지보수성 향상 : 요청 데이터를 구조화하여 가독성이 좋아짐.
`}
				</pre>

				<h3>class-validator 예시</h3>
				<pre>
					{`
// user.dto.ts

import { IsString, IsEmail, IsInt, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18) // 최소 18세 이상
  age: number;
}
  
--------------------------------------------------

// user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return "유저 생성됨: $ {JSON.stringify(createUserDto)}";
  }
} 
`}
				</pre>

				<h3>dto extension example</h3>
				<pre>
					{`
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
`}
				</pre>

				<h3>class-validator Decolator</h3>
				<pre>
					{`
@IsString()
@IsInt()
@IsBoolean()
@IsEmail()
@IsArray()
@IsEnum()
@IsNumber()
@IsDate()
@IsBase64()
@IsOptional()
@MaxLength()
@MinLength()
@Length()
@Matches(RegExp('^[가-힣a-zA-Z0-9]*$'), {message : "unmatch message"})
@Min()
@Max()
`}
				</pre>

				<h3>class-transformer</h3>
				<pre>
					{`
import { IsString, IsEmail, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Transform(({ value }) => Number(value)) // 문자열을 숫자로 변환
  age: number;
}
`}
				</pre>
			</div>
		),
	},
	{
		id: 8,
		date: '17/02/2025',
		tags: ['Unit testing', 'NestJS', 'Backend'],
		title: 'Unit testing',
		content: (
			<div>
				<pre>
					{`
You can divide the testing section by using "describe"
You can preset the data by using beforeEach, beforeAll, afterAll

	--------------------------------------------------

	npm run test:watch
	a

	--------------------------------------------------

	describe('update()', () => {
		it('should update a movie', () => {
		service.update(1, { title: 'Updated test' });
		const movie = service.getOne(1);
		expect(movie.title).toEqual('Updated test');
		});

		it('should throw a NotFoundException (404)', () => {
		try {
			service.update(999, {});
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundException);
		}
		});
	});

	--------------------------------------------------

	npm run test:cov  

	--------------------------------------------------
	// To check how much % I am currently testing
`}
				</pre>
			</div>
		),
	},
	{
		id: 9,
		date: '17/02/2025',
		tags: ['e2e testing', 'NestJS', 'Backend'],
		title: 'e2e testing',
		content: (
			<div>
				<pre>
					{`
It's important to have same Pipe setting as real environment

	--------------------------------------------------

	e.g.

	app.useGlobalPipes(
    	new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
     	}),
    );
	--------------------------------------------------

	e.g.
	it('POST 400', () => {
    	return request(app.getHttpServer())
			.post('/movies')
			.send({
			title: 'Test title',
			year: 2001,
			genres: ['test'],
			other: 'thing',
			})
			.expect(400);
    });
`}
				</pre>
			</div>
		),
	},
]
