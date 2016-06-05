const path = require('path');
const paths: any = {};

// Core paths
paths.root = path.join(__dirname, '../../');
paths.build = path.join(paths.root, 'dist');
paths.source = path.join(paths.root, 'src');
paths.config = path.join(paths.root, 'config');
paths.tests = path.join(paths.root, 'tests');
paths.gulp = path.join(paths.root, 'gulpfile.ts');
paths.reports = path.join(paths.root, 'reports');
paths.node = path.join(paths.root, 'node_modules');

// Typescript
paths.typescript = {};
paths.typescript.baseConfig = path.join(paths.root, 'tsconfig.json');
paths.typescript.appConfig = path.join(paths.source, 'tsconfig.json');

// TSLint paths
paths.tslint = path.join(paths.reports, 'tslint', 'checkstyle.xml');

// Typings
paths.typings = path.join(paths.root, 'typings', 'browser.d.ts');

// Karma paths
paths.karma = {};
paths.karma.config = path.join(paths.root, 'karma.conf.ts');
paths.karma.report = path.join(paths.reports, 'unit');
paths.karma.coverage = path.join(paths.karma.report, 'coverage-final.json');

// Build output paths
paths.output = {};
paths.output.index = path.join(paths.build, 'index.html');
paths.output.app = path.join(paths.build, 'app');
paths.output.assets = path.join(paths.build, 'assets');
paths.output.fonts = path.join(paths.output.assets, 'fonts');
paths.output.images = path.join(paths.output.assets, 'img');
paths.output.icons = path.join(paths.output.images, 'icons');
paths.output.scripts = path.join(paths.output.assets, 'js');
paths.output.styles = path.join(paths.output.assets, 'css');

// Bundle paths
paths.bundle = {};
paths.bundle.entry = path.join(paths.output.app, 'main.js');
paths.bundle.output = path.join(paths.output.app, 'app.js');

// Source paths
paths.sources = {};
paths.sources.index = path.join(paths.source, 'index.html');
paths.sources.bootstrap = path.join(paths.source, 'app', 'main.ts');
paths.sources.scripts = path.join(paths.source, 'app', '**', '*.ts');
paths.sources.templates = path.join(paths.source, 'app', '**', '*.html');
paths.sources.favicon = path.join(paths.source, 'images', 'favicon', 'favicon.png');
paths.sources.fonts = path.join(paths.node, 'font-awesome', 'fonts', '**/*');
paths.sources.styles = path.join(paths.source, 'styles', '**/*.+(scss|sass)');
paths.sources.images = path.join(paths.source, 'images', '**/*.+(gif|jpg|jpeg|png)');
paths.sources.config = path.join(paths.config, 'config.ts.dist');

// Hard coded paths
paths.hardcoded = {};
paths.hardcoded.base = '/app';
paths.hardcoded.favicons = 'assets/img/icons/';
paths.hardcoded.scripts = 'app/app.js';

// Scripts
paths.scripts = {};
paths.scripts.tests = {};
paths.scripts.tests.unit = path.join(paths.source, 'scripts', '**/*.spec.ts');
paths.scripts.tests.e2e = path.join(paths.source, 'scripts', '**/*.e2e-spec.ts');
paths.scripts.gulp = path.join(paths.gulp, '**', '*.ts');

export = paths;
