## How to use
1. Clone
```bash
git clone https://github.com/voyleg/adasegroup.github.io
cd adasegroup.github.io
git checkout feature/research_fair
```

2. Build the environment or use the prebuilt container at `Athena:/home/ovoinov/exchange/world/adase_website_env.dockerimage`.
```bash
# Prepare base environment
cd _setup_env
docker build -t adase/website:base .

# Prepare whole environment
cd ..
docker run --name adase_website_env_setup \
    --mount type=bind,source="$(pwd)",target=/adasegroup.github.io \
    adase/website:base \
    bash /adasegroup.github.io/_setup_env/setup_env.sh
docker commit adase_website_env_setup adase/website:env
```

3. Run the container
```bash
docker run --rm --name adase_website_env \
    --mount type=bind,source="$(pwd)",target=/adasegroup.github.io \
    -p $PORT:2000 \
    adase/website:env \
    bash -c 'cd /adasegroup.github.io && gulp'
```

4. Connect to `localhost:$PORT`.
