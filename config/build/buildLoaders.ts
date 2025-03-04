import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>  Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path]___[local]___[hash:base64:5]' : '[hash:base64:8]',
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                    },
                }
            },
            "sass-loader",
        ],
    };

    return [
        styleLoader,
        typescriptLoader,
    ]
}