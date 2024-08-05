<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Homepage');

Route::get('/kontakt', function () {
    return Inertia::render('Contact');
})->name('Contact');

Route::get('/ueber-mich', function () {
    return Inertia::render('AboutMe');
})->name('AboutMe');

Route::get('/erfahrung', function () {
    return Inertia::render('Experience');
})->name('Experience');

Route::get('/referenzen', function () {
    return Inertia::render('References');
})->name('References');
