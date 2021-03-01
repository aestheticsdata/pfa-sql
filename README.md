## Personal Finance Assistant.
React / Redux / Redux-Saga / immer / React-intl / Express / MongoDB

### warnings :
using path aliases with cra needs to use react-app-rewire (and customize-cra), without ejecting cra.

To avoid the following error :
> The following changes are being made to your tsconfig.json file:
> compilerOptions.paths must not be set (aliased imports are not supported)
  
see : https://github.com/oklas/react-app-rewire-alias#workaround-for-aliased-imports-are-not-supported
