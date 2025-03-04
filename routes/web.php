<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::middleware('guest')->controller(AuthController::class)->group(function () {
    Route::get('/auth/register-admin', 'showRegisterAdmin')->name('show.register.admin');
    Route::post('/register-admin', 'registerAdmin')->name('register.admin');
    Route::get('/auth/register', 'showRegister')->name('show.register');
    Route::post('/register', 'registerUser')->name('register');
    Route::get('/auth/login', 'showLogin')->name('show.login');
    Route::post('/login', 'login')->name('login');
});
