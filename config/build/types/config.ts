type BuildMode = 'production' | 'development';

interface BuildPaths {
    entry: string;
    outputPath: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths,
    isDev: boolean;
    port: number;
}