<!DOCTYPE html>
<html>
<head>
  <title>Star Rating System</title>
  <style>
    .rating {
      display: flex;
      flex-direction: row-reverse;
    }

    .rating input[type="radio"] {
      display: none;
    }

    .rating label {
      display: inline-block;
      width: 30px;
      height: 30px;
      position: relative;
      overflow: hidden;
      font-size: 0;
    }

    .rating label:before {
      content: "\2605";
      position: absolute;
      top: 0;
      left: 0;
      font-size: 30px;
      color: #ccc;
    }

    .rating input[type="radio"]:checked ~ label:before {
      color: gold;
    }
  </style>
</head>
<body>
  <div class="rating">
    <input type="radio" id="star1" name="rating" value="1">
    <label for="star1"></label>
    <input type="radio" id="star2" name="rating" value="2">
    <label for="star2"></label>
    <input type="radio" id="star3" name="rating" value="3">
    <label for="star3"></label>
    <input type="radio" id="star4" name="rating" value="4">
    <label for="star4"></label>
    <input type="radio" id="star5" name="rating" value="5">
    <label for="star5"></label>
  </div>
</body>
</html>