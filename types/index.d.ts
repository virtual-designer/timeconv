declare module "timeconv" {
    export function stringToTimeInterval(input: string): { error: string | undefined, seconds: number };
}