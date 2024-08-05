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
});

Route::get('/kontakt', function () {
    return Inertia::render('Contact');
});

Route::get('/ueber-mich', function () {
    return Inertia::render('AboutMe');
});

Route::get('/erfahrung', function () {
    return Inertia::render('Experience');
});

Route::get('/referenzen', function () {
    return Inertia::render('References');
});
