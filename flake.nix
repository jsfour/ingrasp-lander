{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }:
    let
      # Import nixpkgs for aarch64-darwin packages
      pkgsM1 = import nixpkgs {
        system = "aarch64-darwin";
      };
    in {
      devShell.x86_64-darwin = pkgsM1.mkShell {
        name = "ingrasp-dev";
        buildInputs = [
          pkgsM1.nodejs_18
        ];

      };
    };

}
