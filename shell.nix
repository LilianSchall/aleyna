{ pkgs ? import <nixpkgs> {} }:
(pkgs.mkShell {
  name = "node-env";
  nativeBuildInputs = with pkgs; [
    nodejs
    nodePackages.prettier
    stdenv.cc
    gnumake
  ];

  shellHook = ''
    export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath [
        pkgs.stdenv.cc.cc
    ]};
  '';
})
