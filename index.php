<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paint JS</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="paint">
        <div id="tools">
            <input type="color" id="color" onchange="changecolor()">
            <input type="number" id="thickness" min="1" max="20" value="2" onchange="changethickness()">
            <button id="selected">Effacer</button>
        </div>
        <div id="board">

            <canvas id="canvas"></canvas>
        </div>

    </div>



    <script src="main.js" type="text/javascript"></script>
</body>

</html>