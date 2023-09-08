<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matches</title>
    <style>
        * {
            box-sizing: border-box;
            font-size: 12px;
        }

        table {
            border-collapse: collapse;
        }

        td, th {
            border: 1px solid black;
        }

        td, th {
            padding: 5px;
        }

        .p-decision {
            padding: 12px !important;
        }

        th {
            text-align: center;
        }

        td {
            text-align: left;

        }

        .b-bold {
            font-weight: bold;
        }

        .text-center {
            text-align: center;
        }
        .w-100 {
            width: 100%;
        }
        .header td {
            border: 0;
            padding: 0;
        }

        .text-center{
            text-align: center;
        }
    </style>
</head>
<body>

<h1>SCOREMANAGER</h1>

<div class="text-center">
    <h5>Matches</h5>
</div>
<table class="w-100">
   <thead>
            <tr>
                <td>#</td>
                <td>Home Team</td>
                <td>Away Team</td>
                <td>Status match</td>
                <td>Home score</td>
                <td>Away score</td>
                <td>Home possession</td>
                <td>Away possession</td>
                <td>Home cards</td>
                <td>Away cards</td>
            </tr>
   </thead>
    <tbody>

    @if(sizeof($matches)>0)
        @foreach($matches as $match)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $match->homeTeam->name }}</td>
                <td>{{ $match->awayTeam->name }}</td>
                <td>{{ $match->status }}</td>
                <td>{{ $match->score_home }}</td>
                <td>{{ $match->score_away }}</td>
                <td>{{ $match->pos_home }}</td>
                <td>{{ $match->pos_away }}</td>
                <td>{{ $match->cards_home }}</td>
                <td>{{ $match->cards_away }}</td>
            </tr>
        @endforeach
    @endif


    </tbody>
</table>
</body>
</html>
