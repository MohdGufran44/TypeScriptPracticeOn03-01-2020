function buildLabel(name: string): string {
    return buildLabel.prefix+name+buildLabel.suffix;
}

namespace buildLabel{
    export let suffix = "";
    export let prefix = "Hi, ";
}

console.log(buildLabel("Anas Raza"));