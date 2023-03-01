<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte</title>
</head>
<body>
<div>
    <table>
        <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col"> Nombre del Canal</th>
                    <th scope="col"> Url del Canal</th>
                    <th scope="col"> Seguidores del Canal</th>
                </tr>
        </thead>
        <tbody>
            @foreach ($video as $item)
            <tr>
                <td>{{$item->id}}</td>
                <td>{{$item->nombreCanal}}<</td>
                <td><a href="{{$item->url}}" target="_blank">{{$item->url}}</a><</td>
                <td>{{$item->seguidor}}<</td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
</body>
</html>
