<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leaderboard</title>
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
    <h5>Leaderboard</h5>
</div>
<table class="w-100">
   <thead>
            <tr>
                <td>#</td>
                <td>Team</td>
                <td>Matches</td>
                <td>Win</td>
                <td>Lost</td>
                <td>Draw</td>
                <td>Points</td>
            </tr>
   </thead>
    <tbody>

    @if(sizeof($teams)>0)
        @foreach($teams as $team)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $team->name }}</td>
                <td>{{ $team->matches??0 }}</td>
                <td>{{ $team->win }}</td>
                <td>{{ $team->lost }}</td>
                <td>{{ $team->draw }}</td>
                <td>{{ $team->points }}</td>

            </tr>
        @endforeach
    @endif


    </tbody>
</table>
</body>
</html>
