import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export default function buildDevServer({ port }: BuildOptions): DevServerConfiguration {
    return {
        open: true,
        port,
        historyApiFallback: true,
    }
}