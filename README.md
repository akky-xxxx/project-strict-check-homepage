This is the public document site for [strict-check](https://github.com/akky-xxxx/strict-check)

## scripts
### Development
| script              | description                                                |
|---------------------|------------------------------------------------------------|
| pnpm dev            | Boot as development mode                                   |
| pnpm storybook      | Boot the storybook                                         |
| pnpm fix            | As possible to as format the code                          |
| pnpm check-code     | Run static analysis tools                                  |
| pnpm test-storybook | Run code test of storybook<br />Required storybook booting |

### Operation
| script              | description                                                    |
|---------------------|-----------------------------------------------------------------|
| pnpm run preview    | Build and run as production mode locally                        |

Deployed on Vercel via Git integration (no deploy script required). Pushes to `main` deploy to production, other branches deploy to preview environments.
