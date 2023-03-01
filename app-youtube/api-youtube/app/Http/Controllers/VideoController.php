<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Illuminate\Http\Request;
class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $videos = Video::all();
        return response()->json(['Videos'=>$videos]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $videos = Video::create([
            'nombreCanal'=>$request->nombreCanal,
            'url'=>$request->url,
            'seguidor'=>$request->seguidor
        ]);
        return response()->json(['Messages'=>'Se creo el video con exito']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        //
        $video = Video::find($id);
        return response()->json(['Videos'=>$video]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        $videos = Video::find($id);
        $videos->update([
            'nombreCanal'=>$request->nombreCanal,
            'url'=>$request->url,
            'seguidor'=>$request->seguidor
        ]);
        return response()->json(['Messages'=>'Se Actualizo el video con exito.']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Video  $video
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        //
        $video = Video::find($id)->delete();
        return response()->json(['Messages'=>'Se Elimino el video con exito.']);
    }
    public function mostrarpdf(){
        $video = Video::all();
        $pdf = FacadePdf::loadView('show', compact('video'));
		$pdf->setPaper('A4','portrait');
        $pdf->render();
         return response($pdf->output())->header('content_type','application/pdf');

    }
    public function descargarpdf(){
        $video = Video::all();
        $pdf = FacadePdf::loadView('show', compact('video'));
		$pdf->setPaper('A4','portrait');
        $pdf->render();
         return response($pdf->output())->header('content_type','application/pdf');
    }
}
