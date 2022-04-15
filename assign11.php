<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assign11.css">
      <link rel="stylesheet" href="assign11_form.css">
      <script src="assign11_shop.js"></script>
      <title>Purchase Confirmation</title>
  </head>
  <body>
    <header>
      <div id="logo">
        <img src="logo.png" alt="my logo">
      </div>
    </header>
    <div class="main">
      <?php
        echo $first_name;
      ?>
      <h1>Purchase Confirmation</h1>
      <p>First and Last Name</p>
      <p>The Address<p>
      <p>The Phone #<p>
      <p>List of Items selected w/ cost</p>
      <p>The total cost</p>
      <p>The credit Card Type</p>
      <p>The Credit Card Expiry Date<p>
      <form action="assign11_a.php" method="GET">
        <button type="submit" class="btn" name="confirm">Confirm Purchase</button>
        <button type="submit" class="btn" name="Cancel">Cancel Purchase</button>
      </form>
    </div>

    <footer>
            <div id="contact">
                Cameron Gualco<br>
                Magrath Alberta<br>
                <a href="mailto:cameron.g.photo@gmail.com">cameron.g.photo@gmail.com</a><br>
                (587)-821-2462<br>
                <hr>
                <span id="social">
                Find Me On:<br>
                <a href="https://www.facebook.com/CameronGualcoPhotography" target="_blank">Facebook</a> and
                <a href="https://www.instagram.com/cameron_gualco_photography/" target="_blank">Instagram</a>
                </span>
            </div>
        </footer>
  </body>
</html>