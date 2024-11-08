<?php require_once 'shortcuts.php'; ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shortcut Library</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1> My Shortcut Library</h1>
    </header>
    <main>
        <section class="busqueda">
            <input type="search" id="search-input" placeholder="Find shortcut...">
            <select id="categoria-select">
                <option value="">Todos</option>
                <?php foreach (array_unique(array_column($shortcuts, 'categoria')) as $categoria) { ?>
                    <option value="<?php echo strtolower($categoria); ?>"><?php echo $categoria; ?></option>
                <?php } ?>
            </select>
            <button id="search-btn">Search</button>
        </section>
        <section class="shortcuts" id="shortcuts-container">
            <?php foreach (array_unique(array_column($shortcuts, 'categoria')) as $categoria) { ?>
                <div class="categoria-<?php echo strtolower($categoria); ?>">
                    <h2><?php echo $categoria; ?></h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Shortcut</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody class="tabla-<?php echo strtolower($categoria); ?>">
                            <?php foreach ($shortcuts as $shortcut) {
                                if ($shortcut['categoria'] == $categoria) { ?>
                                    <tr>
                                        <td><?php echo $shortcut["atajo"]; ?></td>
                                        <td><?php echo $shortcut["descripcion"]; ?></td>
                                    </tr>
                            <?php }
                            } ?>
                        </tbody>
                    </table>
                </div>
            <?php } ?>
        </section>
    </main>

    <script src="script.js"></script>
</body>

</html>