# Advanced Data Analytics in Science and Engineering group at Skoltech, Moscow
====================================

Welcome to the ADASE group website!
You can visit us here: http://adasegroup.github.io


## How to make changes
* Clone and make a new branch
```bash
git clone https://github.com/adasegroup/adasegroup.github.io
cd adasegroup.github.io
git checkout -b feature/BRANCH_NAME
```

* Build the environment or use the prebuilt container at `Athena:/home/ovoinov/exchange/world/adase_website_env.dockerimage`.
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

* Run the container
```bash
docker run --rm --name adase_website_env \
    --mount type=bind,source="$(pwd)",target=/adasegroup.github.io \
    -p $PORT:2000 \
    adase/website:env \
    bash -c 'cd /adasegroup.github.io && gulp'
```

* Connect to `localhost:$PORT`.
* Make changes, check, and finally make a pull request
