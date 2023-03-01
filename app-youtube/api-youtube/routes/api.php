<?php

use App\Http\Controllers\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('videos',VideoController::class);
Route::get('show',[VideoController::class,'mostrarpdf']);
Route::get('download',[VideoController::class,'descargarpdf']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
