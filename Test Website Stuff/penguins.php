<?php
// PHP 8.4 logic for handling Quiz Submission
$quiz_submitted = false;
$score = 0;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_quiz'])) {
    $answers = [
        'q1' => 'ice_shelf',
        'q2' => 'overfishing'
    ];
    
    foreach ($answers as $key => $correct_val) {
        if (isset($_POST[$key]) && $_POST[$key] === $correct_val) {
            $score++;
        }
    }
    $quiz_submitted = true;

    // MySQL connection (Update with your credentials)
    $host = 'localhost';
    $db   = 'penguin_db';
    $user = 'root';
    $pass = '';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
        $stmt = $pdo->prepare("INSERT INTO quiz_results (score) VALUES (?)");
        $stmt->execute([$score]);
    } catch (PDOException $e) {
        // Silently handle or log error
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save the Emperor Penguins</title>
    <style>
        :root {
            --ice-blue: #e3f2fd;
            --deep-ocean: #0d47a1;
            --penguin-black: #263238;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
            color: var(--penguin-black);
        }
        header {
            background: var(--deep-ocean);
            color: white;
            padding: 2rem 1rem;
            text-align: center;
        }
        .container {
            width: 90%;
            max-width: 800px;
            margin: auto;
            padding: 20px 0;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            display: block;
            margin: 20px auto;
        }
        section {
            background: white;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h2 { color: var(--deep-ocean); border-bottom: 2px solid var(--ice-blue); }
        
        /* Quiz Styling */
        .quiz-box { background: var(--ice-blue); padding: 20px; border-radius: 10px; }
        .btn {
            background: var(--deep-ocean);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;
            width: 100%;
        }
        
        /* iPhone Specific Tweaks */
        @media (max-width: 480px) {
            h1 { font-size: 1.5rem; }
            section { padding: 15px; }
            .btn { font-size: 1.1rem; }
        }
    </style>
</head>
<body>

<header>
    <h1>The Emperor Penguin</h1>
    <p>Antarctica's Majestic Sovereign in Peril</p>
</header>

<div class="container">
    
    

    <section>
        <h2>Why are they Endangered?</h2>
        <p>The primary threat to Emperor Penguins is <strong>Climate Change</strong>. They rely on "fast ice"—sea ice attached to the land—to breed and raise their chicks. As global temperatures rise, this ice breaks up too early, leading to high mortality rates among chicks who haven't grown their waterproof feathers yet.</p>
        
        
        
        <ul>
            <li><strong>Habitat Loss:</strong> Disappearing breeding grounds.</li>
            <li><strong>Food Scarcity:</strong> Overfishing and changing currents reduce the availability of krill and silverfish.</li>
            <li><strong>Ocean Acidification:</strong> Impacts the entire food chain they depend on.</li>
        </ul>
    </section>

    <section>
        <h2>How You Can Help</h2>
        <p>While the problem is global, individual actions contribute to the solution:</p>
        <ol>
            <li><strong>Reduce Carbon Footprint:</strong> Switch to renewable energy and reduce waste.</li>
            <li><strong>Sustainable Seafood:</strong> Only buy MSC-certified seafood to ensure penguin food sources aren't depleted.</li>
            <li><strong>Support Conservation:</strong> Donate to organizations like the WWF or Antarctic and Southern Ocean Coalition.</li>
        </ol>
    </section>

    <section class="quiz-box">
        <h2>Test Your Knowledge</h2>
        <?php if ($quiz_submitted): ?>
            <div style="text-align:center;">
                <h3>Your Score: <?php echo $score; ?>/2</h3>
                <p><?php echo $score == 2 ? "Excellent! You're a Penguin Protector!" : "Keep learning to help save the ice!"; ?></p>
                <a href="index.php" style="text-decoration:none; color:var(--deep-ocean);">Try Again</a>
            </div>
        <?php else: ?>
            <form method="POST">
                <p>1. Where do Emperor Penguins primary breed?</p>
                <input type="radio" name="q1" value="grass" id="a1"> <label for="a1">Grassy Plains</label><br>
                <input type="radio" name="q1" value="ice_shelf" id="a2"> <label for="a2">Stable Sea Ice (Fast Ice)</label><br>

                <p>2. Aside from climate change, what is a major threat?</p>
                <input type="radio" name="q2" value="overfishing" id="b1"> <label for="b1">Overfishing of Krill</label><br>
                <input type="radio" name="q2" value="volcanoes" id="b2"> <label for="b2">Volcanic Eruptions</label><br><br>
                
                <button type="submit" name="submit_quiz" class="btn">Submit Results</button>
            </form>
        <?php endif; ?>
    </section>
</div>

<footer>
    <p style="text-align:center; padding: 20px; font-size: 0.8rem;">&copy; 2024 Penguin Conservation Project</p>
</footer>

</body>
</html>
