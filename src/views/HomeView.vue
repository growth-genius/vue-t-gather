<template>
    <div>
        <div class="block-category-title">Dashboards</div>
        <BlockViewer header="Sidebar" :code="block1">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div
                    id="app-sidebar"
                    class="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
                    style="width: 280px"
                >
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center px-5 flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30" />
                        </div>
                        <div class="overflow-y-auto">
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                        v-styleclass="{
                                            selector: '@next',
                                            enterClass: 'hidden',
                                            enterActiveClass: 'slidedown',
                                            leaveToClass: 'hidden',
                                            leaveActiveClass: 'slideup',
                                        }"
                                    >
                                        <span class="font-medium">FAVORITES</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-home mr-2"></i>
                                                <span class="font-medium">Dashboard</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-bookmark mr-2"></i>
                                                <span class="font-medium">Bookmarks</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{
                                                    selector: '@next',
                                                    enterClass: 'hidden',
                                                    enterActiveClass: 'slidedown',
                                                    leaveToClass: 'hidden',
                                                    leaveActiveClass: 'slideup',
                                                }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Reports</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul
                                                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                                            >
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                        v-styleclass="{
                                                            selector: '@next',
                                                            enterClass: 'hidden',
                                                            enterActiveClass: 'slidedown',
                                                            leaveToClass: 'hidden',
                                                            leaveActiveClass: 'slideup',
                                                        }"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Revenue</span>
                                                        <i class="pi pi-chevron-down ml-auto"></i>
                                                    </a>
                                                    <ul
                                                        class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                                                    >
                                                        <li>
                                                            <a
                                                                v-ripple
                                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                            >
                                                                <i class="pi pi-table mr-2"></i>
                                                                <span class="font-medium">View</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                v-ripple
                                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                            >
                                                                <i class="pi pi-search mr-2"></i>
                                                                <span class="font-medium">Search</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                    >
                                                        <i class="pi pi-chart-line mr-2"></i>
                                                        <span class="font-medium">Expenses</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-users mr-2"></i>
                                                <span class="font-medium">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-comments mr-2"></i>
                                                <span class="font-medium">Messages</span>
                                                <span
                                                    class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                    style="min-width: 1.5rem; height: 1.5rem"
                                                    >3</span
                                                >
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-calendar mr-2"></i>
                                                <span class="font-medium">Calendar</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="list-none p-3 m-0">
                                <li>
                                    <div
                                        v-ripple
                                        class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                        v-styleclass="{
                                            selector: '@next',
                                            enterClass: 'hidden',
                                            enterActiveClass: 'slidedown',
                                            leaveToClass: 'hidden',
                                            leaveActiveClass: 'slideup',
                                        }"
                                    >
                                        <span class="font-medium">APPLICATION</span>
                                        <i class="pi pi-chevron-down"></i>
                                    </div>
                                    <ul class="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-folder mr-2"></i>
                                                <span class="font-medium">Projects</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-chart-bar mr-2"></i>
                                                <span class="font-medium">Performance</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-cog mr-2"></i>
                                                <span class="font-medium">Settings</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                            <a
                                v-ripple
                                class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                            >
                                <img
                                    src="images/blocks/avatars/circle/avatar-f-1.png"
                                    class="mr-2"
                                    style="width: 28px; height: 28px"
                                />
                                <span class="font-medium">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div
                        class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
                        style="height: 60px"
                    >
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{
                                    selector: '#app-sidebar',
                                    enterClass: 'hidden',
                                    enterActiveClass: 'fadeinleft',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'fadeoutleft',
                                    hideOnOutsideClick: true,
                                }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{
                                selector: '@next',
                                enterClass: 'hidden',
                                enterActiveClass: 'fadein',
                                leaveToClass: 'hidden',
                                leaveActiveClass: 'fadeout',
                                hideOnOutsideClick: true,
                            }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul
                            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                        >
                            <li>
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <img
                                        src="images/blocks/avatars/circle/avatar-f-1.png"
                                        class="mr-3 lg:mr-0"
                                        style="width: 32px; height: 32px"
                                    />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Josephine Lillard</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-column flex-auto">
                        <div class="surface-section p-5">
                            <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                                <div class="flex align-items-start flex-column md:flex-row">
                                    <img
                                        src="images/blocks/avatars/circle/avatar-f-1@2x.png"
                                        class="mr-5 mb-3 lg:mb-0"
                                        style="width: 90px; height: 90px"
                                    />
                                    <div>
                                        <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                                        <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                                        <div class="flex align-items-center flex-wrap text-sm">
                                            <div class="mr-5 mt-3">
                                                <span class="font-medium text-500">FOLLOWERS</span>
                                                <div class="text-700 mt-2">333</div>
                                            </div>
                                            <div class="mr-5 mt-3">
                                                <span class="font-medium text-500">PROJECTS</span>
                                                <div class="text-700 mt-2">26</div>
                                            </div>
                                            <div class="mr-5 mt-3">
                                                <span class="font-medium text-500">COLLECTIONS</span>
                                                <div class="text-700 mt-2">17</div>
                                            </div>
                                            <div class="mt-3">
                                                <span class="font-medium text-500">SHOTS</span>
                                                <div class="text-700 mt-2">130</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 lg:mt-0">
                                    <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
                                    <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
                                    <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button>
                                </div>
                            </div>
                        </div>
                        <div class="p-5">
                            <div class="grid">
                                <div class="col-12 lg:col-6 xl:col-3">
                                    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                        <div class="flex justify-content-between mb-3">
                                            <div>
                                                <span class="block text-500 font-medium mb-3">Orders</span>
                                                <div class="text-900 font-medium text-xl">152</div>
                                            </div>
                                            <div
                                                class="flex align-items-center justify-content-center bg-blue-100 border-round"
                                                style="width: 2.5rem; height: 2.5rem"
                                            >
                                                <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                            </div>
                                        </div>
                                        <span class="text-green-500 font-medium">24 new </span>
                                        <span class="text-500">since last visit</span>
                                    </div>
                                </div>
                                <div class="col-12 lg:col-6 xl:col-3">
                                    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                        <div class="flex justify-content-between mb-3">
                                            <div>
                                                <span class="block text-500 font-medium mb-3">Revenue</span>
                                                <div class="text-900 font-medium text-xl">$2.100</div>
                                            </div>
                                            <div
                                                class="flex align-items-center justify-content-center bg-orange-100 border-round"
                                                style="width: 2.5rem; height: 2.5rem"
                                            >
                                                <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                                            </div>
                                        </div>
                                        <span class="text-green-500 font-medium">%52+ </span>
                                        <span class="text-500">since last week</span>
                                    </div>
                                </div>
                                <div class="col-12 lg:col-6 xl:col-3">
                                    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                        <div class="flex justify-content-between mb-3">
                                            <div>
                                                <span class="block text-500 font-medium mb-3">Customers</span>
                                                <div class="text-900 font-medium text-xl">28441</div>
                                            </div>
                                            <div
                                                class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                                                style="width: 2.5rem; height: 2.5rem"
                                            >
                                                <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                                            </div>
                                        </div>
                                        <span class="text-green-500 font-medium">520 </span>
                                        <span class="text-500">newly registered</span>
                                    </div>
                                </div>
                                <div class="col-12 lg:col-6 xl:col-3">
                                    <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                                        <div class="flex justify-content-between mb-3">
                                            <div>
                                                <span class="block text-500 font-medium mb-3">Comments</span>
                                                <div class="text-900 font-medium text-xl">152 Unread</div>
                                            </div>
                                            <div
                                                class="flex align-items-center justify-content-center bg-purple-100 border-round"
                                                style="width: 2.5rem; height: 2.5rem"
                                            >
                                                <i class="pi pi-comment text-purple-500 text-xl"></i>
                                            </div>
                                        </div>
                                        <span class="text-green-500 font-medium">85 </span>
                                        <span class="text-500">responded</span>
                                    </div>
                                </div>
                                <div class="col-12 xl:col-6">
                                    <div class="surface-card shadow-2 border-round p-4">
                                        <div class="text-xl text-900 font-medium mb-5">Latest News</div>
                                        <ul class="list-none p-0 m-0">
                                            <li class="pb-3 border-bottom-1 surface-border">
                                                <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
                                                <div class="line-height-3 text-600" style="max-width: 30rem">
                                                    Vitae turpis massa sed elementum tempus egestas sed sed risus. In
                                                    metus vulputate eu scelerisque felis imperdiet proin.
                                                </div>
                                            </li>
                                            <li class="py-3 border-bottom-1 surface-border">
                                                <div class="font-medium text-900 mb-2">
                                                    In iaculis nunc sed augue lacus
                                                </div>
                                                <div class="line-height-3 text-600" style="max-width: 30rem">
                                                    Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu
                                                    augue ut lectus. Elementum eu facilisis sed odio morbi.
                                                </div>
                                            </li>
                                            <li class="py-3 border-bottom-1 surface-border">
                                                <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                                                <div class="line-height-3 text-600" style="max-width: 30rem">
                                                    In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed
                                                    lectus vestibulum mattis ullamcorper.
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="flex justify-content-between pt-3">
                                            <Button
                                                label="Clear All"
                                                class="p-button-outlined p-button-secondary w-6 mr-2"
                                            ></Button>
                                            <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 xl:col-6">
                                    <div class="surface-card shadow-2 border-round p-4">
                                        <div class="flex justify-content-between align-items-center mb-5">
                                            <span class="text-xl text-900 font-medium">Team Members</span>
                                            <div>
                                                <Button
                                                    icon="pi pi-ellipsis-v"
                                                    class="p-button-text p-button-plain p-button-rounded"
                                                    @click="$refs.cag.toggle($event)"
                                                ></Button>
                                                <Menu ref="cag" :popup="true" :model="items" appendTo="body"></Menu>
                                            </div>
                                        </div>
                                        <ul class="list-none p-0 m-0">
                                            <li
                                                class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
                                            >
                                                <div class="flex">
                                                    <img
                                                        src="images/blocks/avatars/circle/avatar-f-1.png"
                                                        class="mr-3"
                                                        style="width: 45px; height: 45px"
                                                    />
                                                    <div>
                                                        <span class="block text-900 font-medium mb-1"
                                                            >Janette Hudson</span
                                                        >
                                                        <div class="text-600">UI/UX Designer</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 md:mt-0 flex flex-nowrap">
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-twitter"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-github"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-facebook"
                                                    ></Button>
                                                </div>
                                            </li>
                                            <li
                                                class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
                                            >
                                                <div class="flex">
                                                    <img
                                                        src="images/blocks/avatars/circle/avatar-f-2.png"
                                                        class="mr-3"
                                                        style="width: 45px; height: 45px"
                                                    />
                                                    <div>
                                                        <span class="block text-900 font-medium mb-1"
                                                            >Theresa Webb Hudson</span
                                                        >
                                                        <div class="text-600">UI/UX Designer</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 md:mt-0 flex flex-nowrap">
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-twitter"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-github"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-facebook"
                                                    ></Button>
                                                </div>
                                            </li>
                                            <li
                                                class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
                                            >
                                                <div class="flex">
                                                    <img
                                                        src="images/blocks/avatars/circle/avatar-f-3.png"
                                                        class="mr-3"
                                                        style="width: 45px; height: 45px"
                                                    />
                                                    <div>
                                                        <span class="block text-900 font-medium mb-1"
                                                            >Arlene McCoy</span
                                                        >
                                                        <div class="text-600">UI/UX Designer</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 md:mt-0 flex flex-nowrap">
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-twitter"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-github"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-facebook"
                                                    ></Button>
                                                </div>
                                            </li>
                                            <li
                                                class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
                                            >
                                                <div class="flex">
                                                    <img
                                                        src="images/blocks/avatars/circle/avatar-m-1.png"
                                                        class="mr-3"
                                                        style="width: 45px; height: 45px"
                                                    />
                                                    <div>
                                                        <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                                                        <div class="text-600">UI/UX Designer</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 md:mt-0 flex flex-nowrap">
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-twitter"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-github"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-facebook"
                                                    ></Button>
                                                </div>
                                            </li>
                                            <li
                                                class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"
                                            >
                                                <div class="flex">
                                                    <img
                                                        src="images/blocks/avatars/circle/avatar-m-2.png"
                                                        class="mr-3"
                                                        style="width: 45px; height: 45px"
                                                    />
                                                    <div>
                                                        <span class="block text-900 font-medium mb-1"
                                                            >James Cooper</span
                                                        >
                                                        <div class="text-600">UI/UX Designer</div>
                                                    </div>
                                                </div>
                                                <div class="mt-2 md:mt-0 flex flex-nowrap">
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-twitter"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-github"
                                                    ></Button>
                                                    <Button
                                                        class="p-button-text p-button-plain p-button-rounded mr-1"
                                                        icon="pi pi-facebook"
                                                    ></Button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="border-round p-4">
                                        <div class="text-xl text-900 font-medium mb-5">Timeline</div>
                                        <div class="mb-5 flex">
                                            <div class="flex flex-column align-items-center" style="width: 2rem">
                                                <span
                                                    class="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2"
                                                >
                                                    <i class="pi pi-compass text-xl"></i>
                                                </span>
                                                <div
                                                    class="h-full bg-blue-500"
                                                    style="width: 2px; min-height: 4rem"
                                                ></div>
                                            </div>
                                            <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                <div class="mb-3">
                                                    <span class="text-900 font-medium inline-block mr-3"
                                                        >Jacob Jones</span
                                                    >
                                                    <span class="text-500 text-sm">1 minute ago</span>
                                                </div>
                                                <div class="line-height-3 text-700 mb-3">
                                                    Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                                    Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem
                                                    fringilla ut morbi.
                                                </div>
                                                <div class="text-500 flex align-items-center gap-4">
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-heart"></i>
                                                        <span>0</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-comment"></i>
                                                        <span>1</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-eye"></i>
                                                        <span>24</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-5 flex">
                                            <div class="flex flex-column align-items-center" style="width: 2rem">
                                                <span
                                                    class="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2"
                                                >
                                                    <i class="pi pi-list text-xl"></i>
                                                </span>
                                                <div
                                                    class="h-full bg-orange-500"
                                                    style="width: 2px; min-height: 4rem"
                                                ></div>
                                            </div>
                                            <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                <div class="mb-3">
                                                    <span class="text-900 font-medium inline-block mr-3"
                                                        >Theresa Webb</span
                                                    >
                                                    <span class="text-500 text-sm">2 hours ago</span>
                                                </div>
                                                <div class="line-height-3 text-700 mb-3">
                                                    Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo
                                                    in vitae. Posuere sollicitudin aliquam ultrices sagittis orci a
                                                    scelerisque purus semper.
                                                </div>
                                                <div class="text-500 flex align-items-center gap-4">
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-heart"></i>
                                                        <span>26</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-comment"></i>
                                                        <span>6</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-eye"></i>
                                                        <span>673</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-5 flex">
                                            <div class="flex flex-column align-items-center" style="width: 2rem">
                                                <span
                                                    class="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2"
                                                >
                                                    <i class="pi pi-inbox text-xl"></i>
                                                </span>
                                                <div
                                                    class="h-full bg-purple-500"
                                                    style="width: 2px; min-height: 4rem"
                                                ></div>
                                            </div>
                                            <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                                <div class="mb-3">
                                                    <span class="text-900 font-medium inline-block mr-3"
                                                        >Walter Black</span
                                                    >
                                                    <span class="text-500 text-sm">4 hours ago</span>
                                                </div>
                                                <div class="line-height-3 text-700 mb-3">
                                                    Euismod in pellentesque massa placerat duis ultricies lacus. Vitae
                                                    sapien pellentesque habitant morbi tristique senectus et netus et.
                                                </div>
                                                <div class="text-500 flex align-items-center gap-4">
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-heart"></i>
                                                        <span>62</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-comment"></i>
                                                        <span>36</span>
                                                    </div>
                                                    <div class="flex align-items-center gap-1">
                                                        <i class="pi pi-eye"></i>
                                                        <span>21</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Navbar" :code="block2">
            <div class="min-h-screen flex flex-column">
                <div
                    class="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static"
                    style="min-height: 80px"
                >
                    <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6" />
                    <a
                        v-ripple
                        class="cursor-pointer block lg:hidden text-indigo-50 p-ripple"
                        v-styleclass="{
                            selector: '@next',
                            enterClass: 'hidden',
                            leaveToClass: 'hidden',
                            hideOnOutsideClick: true,
                        }"
                    >
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <div
                        class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none"
                    >
                        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <i class="pi pi-home mr-2"></i>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'scalein',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'fadeout',
                                        hideOnOutsideClick: true,
                                    }"
                                >
                                    <i class="pi pi-users mr-2"></i>
                                    <span>Customers</span>
                                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                                </a>
                                <ul
                                    class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer"
                                >
                                    <li>
                                        <a
                                            v-ripple
                                            class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                                        >
                                            <i class="pi pi-user-plus mr-2"></i>
                                            <span class="font-medium">Add New</span>
                                        </a>
                                    </li>
                                    <li class="relative">
                                        <a
                                            v-ripple
                                            class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'scalein',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'fadeout',
                                                hideOnOutsideClick: true,
                                            }"
                                        >
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                                        </a>
                                        <ul
                                            class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0"
                                        >
                                            <li>
                                                <a
                                                    v-ripple
                                                    class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                                                >
                                                    <i class="pi pi-shopping-cart mr-2"></i>
                                                    <span class="font-medium">Purchases</span>
                                                </a>
                                            </li>
                                            <li class="relative">
                                                <a
                                                    v-ripple
                                                    class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                                                >
                                                    <i class="pi pi-comments mr-2"></i>
                                                    <span class="font-medium">Messages</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span>Stats</span>
                                </a>
                            </li>
                        </ul>
                        <ul
                            class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none"
                        >
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 border-indigo-400 lg:border-top-none">
                                <a
                                    v-ripple
                                    class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                                >
                                    <img
                                        src="images/blocks/avatars/circle/avatar-f-1.png"
                                        class="mr-3 lg:mr-0"
                                        style="width: 32px; height: 32px"
                                    />
                                    <div class="block lg:hidden">
                                        <div class="text-indigo-50 font-medium">Josephine Lillard</div>
                                        <span class="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul
                    class="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border shadow-2 lg:shadow-none"
                >
                    <li class="pr-3">
                        <a class="cursor-pointer">
                            <i class="pi pi-home text-blue-500"></i>
                        </a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-500"></i>
                    </li>
                    <li class="px-2">
                        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-500"></i>
                    </li>
                    <li class="px-2">
                        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
                    </li>
                    <li class="px-2">
                        <i class="pi pi-angle-right text-500"></i>
                    </li>
                    <li class="px-2">
                        <a class="cursor-pointer text-900 white-space-nowrap">Level 1</a>
                    </li>
                </ul>
                <div class="p-5 flex flex-column flex-auto">
                    <div class="grid">
                        <div class="col-12">
                            <div class="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                                <div
                                    class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3"
                                >
                                    <div class="flex align-items-center mb-3">
                                        <i class="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                                        <span class="text-500 font-medium">Orders</span>
                                    </div>
                                    <span class="block text-900 font-medium mb-4 text-xl">152 New</span>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                                        <span class="text-pink-500 font-medium">-25</span>
                                    </div>
                                </div>
                                <div
                                    class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3"
                                >
                                    <div class="flex align-items-center mb-3">
                                        <i class="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                                        <span class="text-500 font-medium">Revenue</span>
                                    </div>
                                    <span class="block text-900 font-medium mb-4 text-xl">$1500</span>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                        <span class="text-green-500 font-medium">+15</span>
                                    </div>
                                </div>
                                <div
                                    class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3"
                                >
                                    <div class="flex align-items-center mb-3">
                                        <i class="pi pi-users text-cyan-500 text-xl mr-2"></i>
                                        <span class="text-500 font-medium">Customers</span>
                                    </div>
                                    <span class="block text-900 font-medium mb-4 text-xl">25100</span>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                        <span class="text-green-500 font-medium">+%12</span>
                                    </div>
                                </div>
                                <div class="flex-auto p-3">
                                    <div class="flex align-items-center mb-3">
                                        <i class="pi pi-users text-purple-500 text-xl mr-2"></i>
                                        <span class="text-500 font-medium">Comments</span>
                                    </div>
                                    <span class="block text-900 font-medium mb-4 text-xl">72</span>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                                        <span class="text-green-500 font-medium">+20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 lg:col-6">
                            <div class="surface-card shadow-2 border-round p-4 h-full">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <div class="text-900 font-medium text-xl">Team Activity</div>
                                    <div>
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-text p-button-plain p-button-rounded"
                                            @click="$refs.menu1.toggle($event)"
                                        ></Button>
                                        <Menu ref="menu1" :popup="true" :model="items"></Menu>
                                    </div>
                                </div>
                                <ul class="list-none p-0 m-0">
                                    <li
                                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row"
                                    >
                                        <div class="flex align-items-start mr-0 lg:mr-5">
                                            <img
                                                src="images/blocks/avatars/circle-big/avatar-f-1.png"
                                                class="mr-3 w-3rem h-3rem"
                                            />
                                            <div>
                                                <span class="text-900 font-medium block mb-2">Jane Cooper</span>
                                                <div class="text-700 mb-2">responded to an issue.</div>
                                                <a class="text-primary cursor-pointer">
                                                    <i class="pi pi-github text-sm mr-2"></i>
                                                    <span>Issue #1185</span>
                                                </a>
                                            </div>
                                        </div>
                                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0"
                                            >14 mins ago</span
                                        >
                                    </li>
                                    <li
                                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row"
                                    >
                                        <div class="flex align-items-start mr-0 lg:mr-5">
                                            <img
                                                src="images/blocks/avatars/circle-big/avatar-m-1.png"
                                                class="mr-3 w-3rem h-3rem"
                                            />
                                            <div>
                                                <span class="text-900 font-medium block mb-2">Robert Fox</span>
                                                <div class="text-700">
                                                    changed team size from
                                                    <span class="text-900 font-medium">5</span> to
                                                    <span class="text-900 font-medium">6</span>.
                                                </div>
                                            </div>
                                        </div>
                                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0"
                                            >20 mins ago</span
                                        >
                                    </li>
                                    <li
                                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row"
                                    >
                                        <div class="flex align-items-start mr-0 lg:mr-5">
                                            <img
                                                src="images/blocks/avatars/circle-big/avatar-f-2.png"
                                                class="mr-3 w-3rem h-3rem"
                                            />
                                            <div>
                                                <span class="text-900 font-medium block mb-2"
                                                    >Kristin Watson Cooper</span
                                                >
                                                <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                                <a class="text-primary cursor-pointer">
                                                    <i class="pi pi-file-pdf text-sm mr-2"></i>
                                                    <span>q4_presentation.pdf</span>
                                                </a>
                                            </div>
                                        </div>
                                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0"
                                            >38 mins ago</span
                                        >
                                    </li>
                                    <li
                                        class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row"
                                    >
                                        <div class="flex align-items-start mr-0 lg:mr-5">
                                            <img
                                                src="images/blocks/avatars/circle-big/avatar-f-3.png"
                                                class="mr-3 w-3rem h-3rem"
                                            />
                                            <div>
                                                <span class="text-900 font-medium block mb-2">Annette Black</span>
                                                <div class="text-700">
                                                    added <span class="text-900 font-medium">Nico Greenberg</span> to
                                                    <span class="text-primary">Watchlist Tier-1</span>.
                                                </div>
                                            </div>
                                        </div>
                                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0"
                                            >1 day ago</span
                                        >
                                    </li>
                                    <li
                                        class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row"
                                    >
                                        <div class="flex align-items-start mr-0 lg:mr-5">
                                            <img
                                                src="images/blocks/avatars/circle-big/avatar-m-2.png"
                                                class="mr-3 w-3rem h-3rem"
                                            />
                                            <div>
                                                <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                                                <div class="text-700">
                                                    has refunded a blue t-shirt for
                                                    <span class="text-primary">$79</span>.
                                                </div>
                                            </div>
                                        </div>
                                        <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0"
                                            >4 days ago</span
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 lg:col-6">
                            <div class="surface-card shadow-2 border-round p-4 h-full">
                                <div class="flex align-items-center justify-content-between mb-4">
                                    <div class="text-900 font-medium text-xl">Notifications</div>
                                    <div>
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-text p-button-plain p-button-rounded"
                                            @click="$refs.menu2.toggle($event)"
                                        ></Button>
                                        <Menu ref="menu2" :popup="true" :model="items"></Menu>
                                    </div>
                                </div>

                                <span class="block text-600 font-medium mb-3">TODAY</span>
                                <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"
                                        >
                                            <i class="pi pi-dollar text-xl text-blue-500"></i>
                                        </div>
                                        <span class="text-900 line-height-3 font-medium"
                                            >Richard Jones
                                            <span class="text-700 font-normal"
                                                >has purchased a blue t-shirt for
                                                <span class="text-primary font-medium">$79</span></span
                                            >
                                        </span>
                                    </li>
                                    <li class="flex align-items-center py-2">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0"
                                        >
                                            <i class="pi pi-download text-xl text-orange-500"></i>
                                        </div>
                                        <span class="text-700 line-height-3"
                                            >Your request for withdrawal of
                                            <span class="text-primary font-medium">$2500</span> has been
                                            initiated.</span
                                        >
                                    </li>
                                </ul>

                                <span class="block text-600 font-medium mb-3">YESTERDAY</span>
                                <ul class="p-0 m-0 list-none">
                                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"
                                        >
                                            <i class="pi pi-dollar text-xl text-blue-500"></i>
                                        </div>
                                        <span class="text-900 line-height-3 font-medium"
                                            >Keyser Wick
                                            <span class="text-700 font-normal"
                                                >has purchased a black jacket for
                                                <span class="text-primary font-medium">$59</span></span
                                            >
                                        </span>
                                    </li>
                                    <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0"
                                        >
                                            <i class="pi pi-question text-xl text-pink-500"></i>
                                        </div>
                                        <span class="text-900 line-height-3 font-medium"
                                            >Jane Davis
                                            <span class="text-700 font-normal"
                                                >has posted a new questions about your product.</span
                                            >
                                        </span>
                                    </li>
                                    <li class="flex align-items-center py-2">
                                        <div
                                            class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0"
                                        >
                                            <i class="pi pi-arrow-up text-xl text-green-500"></i>
                                        </div>
                                        <span class="text-900 line-height-3 font-medium"
                                            >Claire Smith
                                            <span class="text-700 font-normal"
                                                >has upvoted your store along with a comment.</span
                                            >
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 lg:col-4">
                            <div class="surface-card border-round shadow-2 p-4 text-center">
                                <img
                                    src="images/blocks/illustration/windows.svg"
                                    alt="Image"
                                    class="mx-auto block mb-4"
                                />
                                <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                <p class="mt-0 mb-4 p-0 line-height-3">
                                    Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse
                                    platea dictumst.
                                </p>
                                <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                            </div>
                        </div>
                        <div class="col-12 lg:col-4">
                            <div class="surface-card border-round shadow-2 p-4 text-center">
                                <img
                                    src="images/blocks/illustration/security.svg"
                                    alt="Image"
                                    class="mx-auto block mb-4"
                                />
                                <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                <p class="mt-0 mb-4 p-0 line-height-3">
                                    Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse
                                    platea dictumst.
                                </p>
                                <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                            </div>
                        </div>
                        <div class="col-12 lg:col-4">
                            <div class="surface-card border-round shadow-2 p-4 text-center">
                                <img
                                    src="images/blocks/illustration/live-collaboration.svg"
                                    alt="Image"
                                    class="mx-auto block mb-4"
                                />
                                <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                                <p class="mt-0 mb-4 p-0 line-height-3">
                                    Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse
                                    platea dictumst.
                                </p>
                                <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                            </div>
                        </div>
                        <div class="col-12 lg:col-6">
                            <div class="surface-card shadow-2 border-round p-4">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <div class="text-900 font-medium text-xl">Sales</div>
                                    <div>
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-text p-button-plain p-button-rounded"
                                            @click="$refs.menu3.toggle($event)"
                                        ></Button>
                                        <Menu ref="menu3" :popup="true" :model="items"></Menu>
                                    </div>
                                </div>
                                <img src="images/blocks/chart/chart-line.svg" alt="Image" class="w-full" />
                            </div>
                        </div>
                        <div class="col-12 lg:col-6">
                            <div class="surface-card shadow-2 border-round p-4">
                                <div class="flex align-items-center justify-content-between mb-3">
                                    <div class="text-900 font-medium text-xl">Customers</div>
                                    <div>
                                        <Button
                                            icon="pi pi-ellipsis-v"
                                            class="p-button-text p-button-plain p-button-rounded"
                                            @click="$refs.menu4.toggle($event)"
                                        ></Button>
                                        <Menu ref="menu4" :popup="true" :model="items"></Menu>
                                    </div>
                                </div>
                                <img src="images/blocks/chart/chart-bar.svg" alt="Image" class="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>

        <BlockViewer header="Narrow Sidebar" :code="block3">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <div
                    id="app-sidebar-9"
                    class="h-full lg:h-auto surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none"
                >
                    <div class="flex flex-column h-full">
                        <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px">
                            <img src="images/blocks/logos/hyper-cyan.svg" alt="Image" height="30" />
                        </div>
                        <div class="mt-3">
                            <ul class="list-none p-0 m-0">
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{
                                            selector: '@next',
                                            enterClass: 'hidden',
                                            leaveToClass: 'hidden',
                                            hideOnOutsideClick: true,
                                        }"
                                    >
                                        <i
                                            class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"
                                            v-badge.danger
                                        ></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                                    </a>
                                    <ul
                                        class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem"
                                    >
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', toggleClass: 'hidden' }"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul
                                                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out"
                                            >
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                                    >
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                                    >
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                v-ripple
                                                class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                            >
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                                        <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-auto">
                            <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                            <a
                                v-ripple
                                class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple"
                            >
                                <img
                                    src="images/blocks/avatars/circle/avatar-f-1.png"
                                    class="mr-2 lg:mr-0"
                                    style="width: 32px; height: 32px"
                                />
                                <span class="font-medium inline lg:hidden">Amy Elsner</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <div
                        class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border"
                        style="height: 60px"
                    >
                        <div class="flex">
                            <a
                                v-ripple
                                class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                                v-styleclass="{
                                    selector: '#app-sidebar-9',
                                    enterClass: 'hidden',
                                    enterActiveClass: 'fadeinleft',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'fadeoutleft',
                                    hideOnOutsideClick: true,
                                }"
                            >
                                <i class="pi pi-bars text-4xl"></i>
                            </a>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                            </span>
                        </div>
                        <a
                            v-ripple
                            class="cursor-pointer block lg:hidden text-700 p-ripple"
                            v-styleclass="{
                                selector: '@next',
                                enterClass: 'hidden',
                                enterActiveClass: 'fadein',
                                leaveToClass: 'hidden',
                                leaveActiveClass: 'fadeout',
                                hideOnOutsideClick: true,
                            }"
                        >
                            <i class="pi pi-ellipsis-v text-2xl"></i>
                        </a>
                        <ul
                            class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                        >
                            <li>
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                    <span class="block lg:hidden font-medium">Inbox</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                                    <span class="block lg:hidden font-medium">Notifications</span>
                                </a>
                            </li>
                            <li class="border-top-1 surface-border lg:border-top-none">
                                <a
                                    v-ripple
                                    class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors p-ripple"
                                >
                                    <img
                                        src="images/blocks/avatars/circle/avatar-f-1.png"
                                        class="mr-3 lg:mr-0"
                                        style="width: 32px; height: 32px"
                                    />
                                    <div class="block lg:hidden">
                                        <div class="text-900 font-medium">Amy Elsner</div>
                                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-5 flex flex-column flex-auto">
                        <div class="grid">
                            <div class="col-12">
                                <div class="grid">
                                    <div class="col-12 md:col-6 lg:col-3 p-3">
                                        <div class="p-3 text-center bg-blue-500 border-round">
                                            <span
                                                class="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3 p-3"
                                            >
                                                <i class="pi pi-inbox text-xl text-white"></i>
                                            </span>
                                            <div class="text-2xl font-medium text-white mb-2">123K</div>
                                            <span class="text-blue-100 font-medium">Messages</span>
                                        </div>
                                    </div>
                                    <div class="col-12 md:col-6 lg:col-3 p-3">
                                        <div class="p-3 text-center bg-purple-500 border-round">
                                            <span
                                                class="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3"
                                            >
                                                <i class="pi pi-map-marker text-xl text-white"></i>
                                            </span>
                                            <div class="text-2xl font-medium text-white mb-2">23K</div>
                                            <span class="text-purple-100 font-medium">Check-ins</span>
                                        </div>
                                    </div>
                                    <div class="col-12 md:col-6 lg:col-3 p-3">
                                        <div class="p-3 text-center bg-indigo-500 border-round">
                                            <span
                                                class="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3"
                                            >
                                                <i class="pi pi-file text-xl text-white"></i>
                                            </span>
                                            <div class="text-2xl font-medium text-white mb-2">23K</div>
                                            <span class="text-indigo-100 font-medium">Files</span>
                                        </div>
                                    </div>
                                    <div class="col-12 md:col-6 lg:col-3 p-3">
                                        <div class="p-3 text-center bg-orange-500 border-round">
                                            <span
                                                class="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3 p-3"
                                            >
                                                <i class="pi pi-users text-xl text-white"></i>
                                            </span>
                                            <div class="text-2xl font-medium text-white mb-2">40K</div>
                                            <span class="text-orange-100 font-medium">Users</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 lg:col-6">
                                <div class="shadow-2 surface-card border-round p-3">
                                    <div class="flex align-items-center justify-content-between">
                                        <span class="text-xl font-medium text-900">Traffic Distribution</span>
                                    </div>
                                    <div class="mt-3">
                                        <div class="grid">
                                            <div class="col-12 md:col-6">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-twitter text-5xl text-blue-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">12.40K</div>
                                                    <span class="font-medium text-600">Twitter</span>
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6 text-center">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-vimeo text-5xl text-blue-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">10.20K</div>
                                                    <span class="font-medium text-600">Vimeo</span>
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6 text-center">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-facebook text-5xl text-blue-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">5.60K</div>
                                                    <span class="font-medium text-600">Facebook</span>
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6 text-center">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-discord text-5xl text-indigo-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">23.53K</div>
                                                    <span class="font-medium text-600">Discord</span>
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6 text-center">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-github text-5xl text-purple-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">16.70K</div>
                                                    <span class="font-medium text-600">GitHub</span>
                                                </div>
                                            </div>
                                            <div class="col-12 md:col-6 text-center">
                                                <div class="text-center border-1 surface-border border-round p-4">
                                                    <i class="pi pi-google text-5xl text-pink-500"></i>
                                                    <div class="text-900 text-2xl font-700 my-3 font-bold">16.50K</div>
                                                    <span class="font-medium text-600">Google</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 lg:col-6">
                                <div class="surface-card shadow-2 border-round p-4">
                                    <div class="flex align-items-center justify-content-between mb-4">
                                        <span class="text-xl font-medium text-900">Quarter Goals</span>
                                    </div>
                                    <div class="surface-border border-1 border-round p-3 mb-4">
                                        <span class="text-900 font-medium text-3xl"
                                            >85% <span class="text-600">(2125/2500)</span></span
                                        >
                                        <ul class="mt-3 list-none p-0 mx-0 flex">
                                            <li
                                                style="height: 1rem"
                                                class="flex-1 bg-indigo-500 border-round-left"
                                            ></li>
                                            <li style="height: 1rem" class="flex-1 bg-blue-500"></li>
                                            <li style="height: 1rem" class="flex-1 bg-orange-500"></li>
                                            <li style="height: 1rem" class="flex-1 bg-purple-500"></li>
                                            <li style="height: 1rem" class="flex-1 bg-yellow-500"></li>
                                            <li style="height: 1rem" class="flex-1 bg-cyan-500"></li>
                                            <li style="height: 1rem" class="flex-1 surface-500 border-round-right"></li>
                                        </ul>
                                    </div>
                                    <ul class="mt-4 list-none p-0 mx-0">
                                        <li class="flex align-items-center pb-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-indigo-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">Watch</span>
                                            <span class="text-600 text-xl font-medium ml-auto">152</span>
                                        </li>
                                        <li class="flex align-items-center py-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-blue-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">Blue Band</span>
                                            <span class="text-600 text-xl font-medium ml-auto">63</span>
                                        </li>
                                        <li class="flex align-items-center py-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-orange-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">Controller</span>
                                            <span class="text-600 text-xl font-medium ml-auto">23</span>
                                        </li>
                                        <li class="flex align-items-center py-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-purple-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">Lime Band</span>
                                            <span class="text-600 text-xl font-medium ml-auto">42</span>
                                        </li>
                                        <li class="flex align-items-center py-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-yellow-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">Phone Case</span>
                                            <span class="text-600 text-xl font-medium ml-auto">134</span>
                                        </li>
                                        <li class="flex align-items-center py-3">
                                            <span
                                                style="width: 1rem; height: 1rem"
                                                class="border-round bg-cyan-500 mr-3 flex-shrink-0"
                                            ></span>
                                            <span class="text-xl font-medium text-90">T-Shirt</span>
                                            <span class="text-600 text-xl font-medium ml-auto">89</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="surface-ground">
                                    <div class="grid">
                                        <div class="col-12 lg:col-4 p-2">
                                            <div class="shadow-2 surface-card border-round p-4 h-full">
                                                <div class="flex align-items-start mb-5">
                                                    <img
                                                        src="images/blocks/avatars/circle-big/avatar-m-1.png"
                                                        width="56"
                                                        height="56"
                                                    />
                                                    <div class="ml-3">
                                                        <span class="block text-900 mb-1 text-xl font-medium"
                                                            >Cameron Williamson</span
                                                        >
                                                        <p class="text-600 mt-0 mb-0">Marketing Coordinator</p>
                                                    </div>
                                                </div>
                                                <ul class="list-none p-0 m-0">
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-twitter mr-2"></i>
                                                                <span class="font-medium text-900">Twitter</span>
                                                            </span>
                                                            <span class="text-cyan-500 font-medium">34.00%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-cyan-500 h-full"
                                                                style="width: 34%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-facebook mr-2"></i>
                                                                <span class="font-medium text-900">Facebook</span>
                                                            </span>
                                                            <span class="text-indigo-500 font-medium">45.86%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-indigo-500 h-full"
                                                                style="width: 45%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-google mr-2"></i>
                                                                <span class="font-medium text-900">Google</span>
                                                            </span>
                                                            <span class="text-orange-500 font-medium">79.00%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-orange-500 h-full"
                                                                style="width: 79%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-12 lg:col-4 p-2">
                                            <div class="shadow-2 surface-card border-round p-4 h-full">
                                                <div class="flex align-items-start mb-5">
                                                    <img
                                                        src="images/blocks/avatars/circle-big/avatar-f-2.png"
                                                        width="56"
                                                        height="56"
                                                    />
                                                    <div class="ml-3">
                                                        <span class="block text-900 mb-1 text-xl font-medium"
                                                            >Kathryn Murphy</span
                                                        >
                                                        <p class="text-600 mt-0 mb-0">Sales Manager</p>
                                                    </div>
                                                </div>
                                                <ul class="list-none p-0 m-0">
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-twitter mr-2"></i>
                                                                <span class="font-medium text-900">Twitter</span>
                                                            </span>
                                                            <span class="text-cyan-500 font-medium">64.47%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-cyan-500 h-full"
                                                                style="width: 64%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-facebook mr-2"></i>
                                                                <span class="font-medium text-900">Facebook</span>
                                                            </span>
                                                            <span class="text-indigo-500 font-medium">75.67%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-indigo-500 h-full"
                                                                style="width: 75%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-google mr-2"></i>
                                                                <span class="font-medium text-900">Google</span>
                                                            </span>
                                                            <span class="text-orange-500 font-medium">45.00%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-orange-500 h-full"
                                                                style="width: 45%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-12 lg:col-4 p-2">
                                            <div class="shadow-2 surface-card border-round p-4 h-full">
                                                <div class="flex align-items-start mb-5">
                                                    <img
                                                        src="images/blocks/avatars/circle-big/avatar-m-3.png"
                                                        width="56"
                                                        height="56"
                                                    />
                                                    <div class="ml-3">
                                                        <span class="block text-900 mb-1 text-xl font-medium"
                                                            >Darrell Steward</span
                                                        >
                                                        <p class="text-600 mt-0 mb-0">Web Designer</p>
                                                    </div>
                                                </div>
                                                <ul class="list-none p-0 m-0">
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-twitter mr-2"></i>
                                                                <span class="font-medium text-900">Twitter</span>
                                                            </span>
                                                            <span class="text-cyan-500 font-medium">23.55%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-cyan-500 h-full"
                                                                style="width: 34%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li class="mb-5">
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-facebook mr-2"></i>
                                                                <span class="font-medium text-900">Facebook</span>
                                                            </span>
                                                            <span class="text-indigo-500 font-medium">78.65%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-indigo-500 h-full"
                                                                style="width: 45%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex justify-content-between align-items-center">
                                                            <span
                                                                class="text-900 inline-flex justify-content-between align-items-center"
                                                            >
                                                                <i class="pi pi-google mr-2"></i>
                                                                <span class="font-medium text-900">Google</span>
                                                            </span>
                                                            <span class="text-orange-500 font-medium">86.54%</span>
                                                        </div>
                                                        <div
                                                            class="surface-300 w-full mt-2"
                                                            style="height: 7px; border-radius: 4px"
                                                        >
                                                            <div
                                                                class="bg-orange-500 h-full"
                                                                style="width: 79%; border-radius: 4px"
                                                            ></div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BlockViewer>
    </div>
</template>

<script>
import BlockViewer from '@/components/blockviewer/BlockViewer.vue';

export default {
    name: 'Dashboard',
    components: { BlockViewer },
    data() {
        return {
            items: [
                { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                { label: 'Remove', icon: 'pi pi-fw pi-minus' },
            ],
            block1: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar" class="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style="width:280px">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-700.svg" alt="Image" height="30">
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2" style="width: 28px; height: 28px"/>
                    <span class="font-medium">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="flex flex-column flex-auto">
            <div class="surface-section p-5">
                <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                    <div class="flex align-items-start flex-column md:flex-row">
                        <img src="images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-5 mb-3 lg:mb-0" style="width:90px;height:90px" />
                        <div>
                            <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                            <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                            <div class="flex align-items-center flex-wrap text-sm">
                                <div class="mr-5 mt-3">
                                    <span class="font-medium text-500">FOLLOWERS</span>
                                    <div class="text-700 mt-2">333</div>
                                </div>
                                <div class="mr-5 mt-3">
                                    <span class="font-medium text-500">PROJECTS</span>
                                    <div class="text-700 mt-2">26</div>
                                </div>
                                <div class="mr-5 mt-3">
                                    <span class="font-medium text-500">COLLECTIONS</span>
                                    <div class="text-700 mt-2">17</div>
                                </div>
                                <div class="mt-3">
                                    <span class="font-medium text-500">SHOTS</span>
                                    <div class="text-700 mt-2">130</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 lg:mt-0">
                        <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
                        <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
                        <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button>
                    </div>
                </div>
            </div>
            <div class="p-5">
                <div class="grid">
                    <div class="col-12 lg:col-6 xl:col-3">
                        <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div class="flex justify-content-between mb-3">
                                <div>
                                    <span class="block text-500 font-medium mb-3">Orders</span>
                                    <div class="text-900 font-medium text-xl">152</div>
                                </div>
                                <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">24 new </span>
                            <span class="text-500">since last visit</span>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6 xl:col-3">
                        <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div class="flex justify-content-between mb-3">
                                <div>
                                    <span class="block text-500 font-medium mb-3">Revenue</span>
                                    <div class="text-900 font-medium text-xl">$2.100</div>
                                </div>
                                <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                                    <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">%52+ </span>
                            <span class="text-500">since last week</span>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6 xl:col-3">
                        <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div class="flex justify-content-between mb-3">
                                <div>
                                    <span class="block text-500 font-medium mb-3">Customers</span>
                                    <div class="text-900 font-medium text-xl">28441</div>
                                </div>
                                <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                                    <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">520  </span>
                            <span class="text-500">newly registered</span>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6 xl:col-3">
                        <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                            <div class="flex justify-content-between mb-3">
                                <div>
                                    <span class="block text-500 font-medium mb-3">Comments</span>
                                    <div class="text-900 font-medium text-xl">152 Unread</div>
                                </div>
                                <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                                    <i class="pi pi-comment text-purple-500 text-xl"></i>
                                </div>
                            </div>
                            <span class="text-green-500 font-medium">85 </span>
                            <span class="text-500">responded</span>
                        </div>
                    </div>
                    <div class="col-12 xl:col-6">
                        <div class="surface-card shadow-2 border-round p-4">
                            <div class="text-xl text-900 font-medium mb-5">Latest News</div>
                            <ul class="list-none p-0 m-0">
                                <li class="pb-3 border-bottom-1 surface-border">
                                    <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
                                    <div class="line-height-3 text-600" style="max-width: 30rem">Vitae turpis massa sed elementum tempus egestas sed sed risus.
                                        In metus vulputate eu scelerisque felis imperdiet proin.</div>
                                </li>
                                <li class="py-3 border-bottom-1 surface-border">
                                    <div class="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                                    <div class="line-height-3 text-600" style="max-width: 30rem">Viverra vitae congue. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.
                                        Elementum eu facilisis sed odio morbi.</div>
                                </li>
                                <li class="py-3 border-bottom-1 surface-border">
                                    <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                                    <div class="line-height-3 text-600" style="max-width: 30rem">In pellentesque massa placerat duis ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                                </li>
                            </ul>
                            <div class="flex justify-content-between pt-3">
                                <Button label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></Button>
                                <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 xl:col-6">
                        <div class="surface-card shadow-2 border-round p-4">
                            <div class="flex justify-content-between align-items-center mb-5">
                                <span class="text-xl text-900 font-medium">Team Members</span>
                                <div>
                                    <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.cag.toggle($event)"></Button>
                                    <Menu ref="cag" :popup="true" :model="items" appendTo="body"></Menu>
                                </div>
                            </div>
                            <ul class="list-none p-0 m-0">
                                <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="flex">
                                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3" style="width: 45px; height: 45px" />
                                        <div>
                                            <span class="block text-900 font-medium mb-1">Janette Hudson</span>
                                            <div class="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                                    </div>
                                </li>
                                <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="flex">
                                        <img src="images/blocks/avatars/circle/avatar-f-2.png" class="mr-3" style="width: 45px; height: 45px" />
                                        <div>
                                            <span class="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                                            <div class="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                                    </div>
                                </li>
                                <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="flex">
                                        <img src="images/blocks/avatars/circle/avatar-f-3.png" class="mr-3" style="width: 45px; height: 45px" />
                                        <div>
                                            <span class="block text-900 font-medium mb-1">Arlene McCoy</span>
                                            <div class="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                                    </div>
                                </li>
                                <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="flex">
                                        <img src="images/blocks/avatars/circle/avatar-m-1.png" class="mr-3" style="width: 45px; height: 45px" />
                                        <div>
                                            <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                                            <div class="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                                    </div>
                                </li>
                                <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div class="flex">
                                        <img src="images/blocks/avatars/circle/avatar-m-2.png" class="mr-3" style="width: 45px; height: 45px" />
                                        <div>
                                            <span class="block text-900 font-medium mb-1">James Cooper</span>
                                            <div class="text-600">UI/UX Designer</div>
                                        </div>
                                    </div>
                                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                                        <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="border-round p-4">
                            <div class="text-xl text-900 font-medium mb-5">Timeline</div>
                            <div class="mb-5 flex">
                                <div class="flex flex-column align-items-center" style="width:2rem">
                                    <span class="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i class="pi pi-compass text-xl"></i>
                                    </span>
                                    <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
                                </div>
                                <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                                        <span class="text-500 text-sm">1 minute ago</span>
                                    </div>
                                    <div class="line-height-3 text-700 mb-3">
                                        Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                                        Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                                    </div>
                                    <div class="text-500 flex align-items-center gap-4">
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-heart"></i>
                                            <span>0</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-comment"></i>
                                            <span>1</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-eye"></i>
                                            <span>24</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5 flex">
                                <div class="flex flex-column align-items-center" style="width:2rem">
                                    <span class="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i class="pi pi-list text-xl"></i>
                                    </span>
                                    <div class="h-full bg-orange-500" style="width: 2px; min-height: 4rem"></div>
                                </div>
                                <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                                        <span class="text-500 text-sm">2 hours ago</span>
                                    </div>
                                    <div class="line-height-3 text-700 mb-3">
                                        Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                                    </div>
                                    <div class="text-500 flex align-items-center gap-4">
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-heart"></i>
                                            <span>26</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-comment"></i>
                                            <span>6</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-eye"></i>
                                            <span>673</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5 flex">
                                <div class="flex flex-column align-items-center" style="width:2rem">
                                    <span class="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                                        <i class="pi pi-inbox text-xl"></i>
                                    </span>
                                    <div class="h-full bg-purple-500" style="width: 2px; min-height: 4rem"></div>
                                </div>
                                <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                                    <div class="mb-3">
                                        <span class="text-900 font-medium inline-block mr-3">Walter Black</span>
                                        <span class="text-500 text-sm">4 hours ago</span>
                                    </div>
                                    <div class="line-height-3 text-700 mb-3">
                                        Euismod in pellentesque massa placerat duis ultricies lacus.
                                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                                    </div>
                                    <div class="text-500 flex align-items-center gap-4">
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-heart"></i>
                                            <span>62</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-comment"></i>
                                            <span>36</span>
                                        </div>
                                        <div class="flex align-items-center gap-1">
                                            <i class="pi pi-eye"></i>
                                            <span>21</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
            block2: `
<div class="min-h-screen flex flex-column">
    <div class="bg-indigo-500 py-3 px-5 flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
        <img src="images/blocks/logos/hyper-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a v-ripple class="cursor-pointer block lg:hidden text-indigo-50 p-ripple"
            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-home mr-2"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                        <i class="pi pi-users mr-2"></i>
                        <span>Customers</span>
                        <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                    </a>
                    <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                        <li>
                            <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                                <i class="pi pi-user-plus mr-2"></i>
                                <span class="font-medium">Add New</span>
                            </a>
                        </li>
                        <li class="relative">
                            <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                                <i class="pi pi-search mr-2"></i>
                                <span class="font-medium">Search</span>
                                <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                            </a>
                            <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:border-1 border-50 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                <li>
                                    <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-shopping-cart mr-2"></i>
                                        <span class="font-medium">Purchases</span>
                                    </a>
                                </li>
                                <li class="relative">
                                    <a v-ripple class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-calendar mr-2"></i>
                        <span>Calendar</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-chart-line mr-2"></i>
                        <span>Stats</span>
                    </a>
                </li>
            </ul>
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 border-indigo-400 lg:border-top-none">
                    <a v-ripple class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-indigo-50 font-medium">Josephine Lillard</div>
                            <span class="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <ul class="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border shadow-2 lg:shadow-none">
        <li class="pr-3">
            <a class="cursor-pointer">
                <i class="pi pi-home text-blue-500"></i>
            </a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500"></i>
        </li>
        <li class="px-2">
            <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500"></i>
        </li>
        <li class="px-2">
            <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
        </li>
        <li class="px-2">
            <i class="pi pi-angle-right text-500"></i>
        </li>
        <li class="px-2">
            <a class="cursor-pointer text-900 white-space-nowrap">Level 1</a>
        </li>
    </ul>
    <div class="p-5 flex flex-column flex-auto">
        <div class="grid">
            <div class="col-12">
                <div class="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
                    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div class="flex align-items-center mb-3">
                            <i class="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                            <span class="text-500 font-medium">Orders</span>
                        </div>
                        <span class="block text-900 font-medium mb-4 text-xl">152 New</span>
                        <div class="flex align-items-center">
                            <i class="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                            <span class="text-pink-500 font-medium ">-25</span>
                        </div>
                    </div>
                    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div class="flex align-items-center mb-3">
                            <i class="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                            <span class="text-500 font-medium">Revenue</span>
                        </div>
                        <span class="block text-900 font-medium mb-4 text-xl">$1500</span>
                        <div class="flex align-items-center">
                            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span class="text-green-500 font-medium ">+15</span>
                        </div>
                    </div>
                    <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
                        <div class="flex align-items-center mb-3">
                            <i class="pi pi-users text-cyan-500 text-xl mr-2"></i>
                            <span class="text-500 font-medium">Customers</span>
                        </div>
                        <span class="block text-900 font-medium mb-4 text-xl">25100</span>
                        <div class="flex align-items-center">
                            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span class="text-green-500 font-medium ">+%12</span>
                        </div>
                    </div>
                    <div class="flex-auto p-3">
                        <div class="flex align-items-center mb-3">
                            <i class="pi pi-users text-purple-500 text-xl mr-2"></i>
                            <span class="text-500 font-medium">Comments</span>
                        </div>
                        <span class="block text-900 font-medium mb-4 text-xl">72</span>
                        <div class="flex align-items-center">
                            <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                            <span class="text-green-500 font-medium ">+20</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="surface-card shadow-2 border-round p-4 h-full">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <div class="text-900 font-medium text-xl">Team Activity</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu1.toggle($event)"></Button>
                            <Menu ref="menu1" :popup="true" :model="items"></Menu>
                        </div>
                    </div>
                    <ul class="list-none p-0 m-0">
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <img src="images/blocks/avatars/circle-big/avatar-f-1.png" class="mr-3 w-3rem h-3rem"/>
                                <div>
                                    <span class="text-900 font-medium block mb-2">Jane Cooper</span>
                                    <div class="text-700 mb-2">responded to an issue.</div>
                                    <a class="text-primary cursor-pointer">
                                        <i class="pi pi-github text-sm mr-2"></i>
                                        <span>Issue #1185</span>
                                    </a>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <img src="images/blocks/avatars/circle-big/avatar-m-1.png" class="mr-3 w-3rem h-3rem"/>
                                <div>
                                    <span class="text-900 font-medium block mb-2">Robert Fox</span>
                                    <div class="text-700">changed team size from <span class="text-900 font-medium">5</span> to <span class="text-900 font-medium">6</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <img src="images/blocks/avatars/circle-big/avatar-f-2.png" class="mr-3 w-3rem h-3rem"/>
                                <div>
                                    <span class="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                                    <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                                    <a class="text-primary cursor-pointer">
                                        <i class="pi pi-file-pdf text-sm mr-2"></i>
                                        <span>q4_presentation.pdf</span>
                                    </a>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
                        </li>
                        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <img src="images/blocks/avatars/circle-big/avatar-f-3.png" class="mr-3 w-3rem h-3rem"/>
                                <div>
                                    <span class="text-900 font-medium block mb-2">Annette Black</span>
                                    <div class="text-700">added <span class="text-900 font-medium">Nico Greenberg</span> to <span class="text-primary">Watchlist Tier-1</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
                        </li>
                        <li class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
                            <div class="flex align-items-start mr-0 lg:mr-5">
                                <img src="images/blocks/avatars/circle-big/avatar-m-2.png" class="mr-3 w-3rem h-3rem"/>
                                <div>
                                    <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                                    <div class="text-700">has refunded a blue t-shirt for <span class="text-primary">$79</span>.</div>
                                </div>
                            </div>
                            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="surface-card shadow-2 border-round p-4 h-full">
                    <div class="flex align-items-center justify-content-between mb-4">
                        <div class="text-900 font-medium text-xl">Notifications</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu2.toggle($event)"></Button>
                            <Menu ref="menu2" :popup="true" :model="items"></Menu>
                        </div>
                    </div>

                    <span class="block text-600 font-medium mb-3">TODAY</span>
                    <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Richard Jones
                                <span class="text-700 font-normal">has purchased a blue t-shirt for <span class="text-primary font-medium">$79</span></span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-download text-xl text-orange-500"></i>
                            </div>
                            <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-primary font-medium">$2500</span> has been initiated.</span>
                        </li>
                    </ul>

                    <span class="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul class="p-0 m-0 list-none">
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-dollar text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Keyser Wick
                                <span class="text-700 font-normal">has purchased a black jacket for <span class="text-primary font-medium">$59</span></span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-question text-xl text-pink-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Jane Davis
                                <span class="text-700 font-normal">has posted a new questions about your product.</span>
                            </span>
                        </li>
                        <li class="flex align-items-center py-2">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                                <i class="pi pi-arrow-up text-xl text-green-500"></i>
                            </div>
                            <span class="text-900 line-height-3 font-medium">Claire Smith
                                <span class="text-700 font-normal">has upvoted your store along with a comment.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="surface-card border-round shadow-2 p-4 text-center">
                    <img src="images/blocks/illustration/windows.svg" alt="Image" class="mx-auto block mb-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="surface-card border-round shadow-2 p-4 text-center">
                    <img src="images/blocks/illustration/security.svg" alt="Image" class="mx-auto block mb-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                </div>
            </div>
            <div class="col-12 lg:col-4">
                <div class="surface-card border-round shadow-2 p-4 text-center">
                    <img src="images/blocks/illustration/live-collaboration.svg" alt="Image" class="mx-auto block mb-4">
                    <div class="text-900 font-medium mb-2 text-xl">Title Placeholder</div>
                    <p class="mt-0 mb-4 p-0 line-height-3">Nunc mi ipsum faucibus vitae aliquet nec. Lacus sed viverra tellus in hac habitasse platea dictumst.</p>
                    <Button label="Learn More" icon="pi pi-arrow-right p-button-rounded"></Button>
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="surface-card shadow-2 border-round p-4">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <div class="text-900 font-medium text-xl">Sales</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu3.toggle($event)"></Button>
                            <Menu ref="menu3" :popup="true" :model="items"></Menu>
                        </div>
                    </div>
                    <img src="images/blocks/chart/chart-line.svg" alt="Image" class="w-full">
                </div>
            </div>
            <div class="col-12 lg:col-6">
                <div class="surface-card shadow-2 border-round p-4">
                    <div class="flex align-items-center justify-content-between mb-3">
                        <div class="text-900 font-medium text-xl">Customers</div>
                        <div>
                            <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" @click="$refs.menu4.toggle($event)"></Button>
                            <Menu ref="menu4" :popup="true" :model="items"></Menu>
                        </div>
                    </div>
                    <img src="images/blocks/chart/chart-bar.svg" alt="Image" class="w-full">
                </div>
            </div>
        </div>
    </div>
</div>`,
            block3: `
<div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-9" class="h-full lg:h-auto surface-section hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-18rem lg:w-7rem select-none">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-center flex-shrink-0" style="height:60px">
                <img src="images/blocks/logos/hyper-cyan.svg" alt="Image" height="30">
            </div>
            <div class="mt-3">
                <ul class="list-none p-0 m-0">
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-cyan-600 border-left-2 border-cyan-600 hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Home</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Search</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Team</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                            <i class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl" v-badge.danger></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Reports</span>
                            <i class="pi pi-chevron-down ml-auto lg:hidden"></i>
                        </a>
                        <ul class="list-none pl-3 pr-0 py-0 lg:p-3 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out static border-round-right lg:absolute left-100 top-0 z-1 surface-overlay shadow-none lg:shadow-2 w-full lg:w-15rem">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple"
                                    v-styleclass="{ selector: '@next', toggleClass: 'hidden' }">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Revenue</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-table mr-2"></i>
                                            <span class="font-medium">View</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-search mr-2"></i>
                                            <span class="font-medium">Search</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 hover:surface-100 hover:text-900 border-round text-600 hover:text-700 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Expenses</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-calendar mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Events</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center text-600 border-left-2 border-transparent hover:border-300 transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-cog mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-2xl"></i>
                            <span class="font-medium inline text-base lg:text-xs lg:block">Options</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:surface-200 border-round text-600 transition-duration-150 transition-colors p-ripple">
                    <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-2 lg:mr-0" style="width: 32px; height: 32px"/>
                    <span class="font-medium inline lg:hidden">Amy Elsner</span>
                </a>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section relative lg:static border-bottom-1 surface-border" style="height:60px">
            <div class="flex">
                <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                    v-styleclass="{ selector: '#app-sidebar-9', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                </span>
            </div>
            <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                        <img src="images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Amy Elsner</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div class="grid">
                <div class="col-12">
                    <div class="grid">
                        <div class="col-12 md:col-6 lg:col-3 p-3">
                            <div class="p-3 text-center bg-blue-500 border-round">
                                <span class="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3 p-3">
                                    <i class="pi pi-inbox text-xl text-white"></i>
                                </span>
                                <div class="text-2xl font-medium text-white mb-2">123K</div>
                                <span class="text-blue-100 font-medium">Messages</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 p-3">
                            <div class="p-3 text-center bg-purple-500 border-round">
                                <span class="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3 p-3">
                                    <i class="pi pi-map-marker text-xl text-white"></i>
                                </span>
                                <div class="text-2xl font-medium text-white mb-2">23K</div>
                                <span class="text-purple-100 font-medium">Check-ins</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 p-3">
                            <div class="p-3 text-center bg-indigo-500 border-round">
                                <span class="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3 p-3">
                                    <i class="pi pi-file text-xl text-white"></i>
                                </span>
                                <div class="text-2xl font-medium text-white mb-2">23K</div>
                                <span class="text-indigo-100 font-medium">Files</span>
                            </div>
                        </div>
                        <div class="col-12 md:col-6 lg:col-3 p-3">
                            <div class="p-3 text-center bg-orange-500 border-round">
                                <span class="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3 p-3">
                                    <i class="pi pi-users text-xl text-white"></i>
                                </span>
                                <div class="text-2xl font-medium text-white mb-2">40K</div>
                                <span class="text-orange-100 font-medium">Users</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="shadow-2 surface-card border-round p-3">
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-xl font-medium text-900">Traffic Distribution</span>
                        </div>
                        <div class="mt-3">
                            <div class="grid">
                                <div class="col-12 md:col-6">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-twitter text-5xl text-blue-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">12.40K</div>
                                        <span class="font-medium text-600">Twitter</span>
                                    </div>
                                </div>
                                <div class="col-12 md:col-6 text-center">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-vimeo text-5xl text-blue-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">10.20K</div>
                                        <span class="font-medium text-600">Vimeo</span>
                                    </div>
                                </div>
                                <div class="col-12 md:col-6 text-center">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-facebook text-5xl text-blue-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">5.60K</div>
                                        <span class="font-medium text-600">Facebook</span>
                                    </div>
                                </div>
                                <div class="col-12 md:col-6 text-center">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-discord text-5xl text-indigo-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">23.53K</div>
                                        <span class="font-medium text-600">Discord</span>
                                    </div>
                                </div>
                                <div class="col-12 md:col-6 text-center">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-github text-5xl text-purple-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">16.70K</div>
                                        <span class="font-medium text-600">GitHub</span>
                                    </div>
                                </div>
                                <div class="col-12 md:col-6 text-center">
                                    <div class="text-center border-1 surface-border border-round p-4">
                                        <i class="pi pi-google text-5xl text-pink-500"></i>
                                        <div class="text-900 text-2xl font-700 my-3 font-bold">16.50K</div>
                                        <span class="font-medium text-600">Google</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6">
                    <div class="surface-card shadow-2 border-round p-4">
                        <div class="flex align-items-center justify-content-between mb-4">
                            <span class="text-xl font-medium text-900">Quarter Goals</span>
                        </div>
                        <div class="surface-border border-1 border-round p-3 mb-4">
                            <span class="text-900 font-medium text-3xl">85% <span class="text-600">(2125/2500)</span></span>
                            <ul class="mt-3 list-none p-0 mx-0 flex">
                                <li style="height:1rem" class="flex-1 bg-indigo-500 border-round-left"></li>
                                <li style="height:1rem" class="flex-1 bg-blue-500"></li>
                                <li style="height:1rem" class="flex-1 bg-orange-500"></li>
                                <li style="height:1rem" class="flex-1 bg-purple-500"></li>
                                <li style="height:1rem" class="flex-1 bg-yellow-500"></li>
                                <li style="height:1rem" class="flex-1 bg-cyan-500"></li>
                                <li style="height:1rem" class="flex-1 surface-500 border-round-right"></li>
                            </ul>
                        </div>
                        <ul class="mt-4 list-none p-0 mx-0">
                            <li class="flex align-items-center pb-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">Watch</span>
                                <span class="text-600 text-xl font-medium ml-auto">152</span>
                            </li>
                            <li class="flex align-items-center py-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">Blue Band</span>
                                <span class="text-600 text-xl font-medium ml-auto">63</span>
                            </li>
                            <li class="flex align-items-center py-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-orange-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">Controller</span>
                                <span class="text-600 text-xl font-medium ml-auto">23</span>
                            </li>
                            <li class="flex align-items-center py-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-purple-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">Lime Band</span>
                                <span class="text-600 text-xl font-medium ml-auto">42</span>
                            </li>
                            <li class="flex align-items-center py-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-yellow-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">Phone Case</span>
                                <span class="text-600 text-xl font-medium ml-auto">134</span>
                            </li>
                            <li class="flex align-items-center py-3">
                                <span style="width:1rem;height:1rem" class="border-round bg-cyan-500 mr-3 flex-shrink-0"></span>
                                <span class="text-xl font-medium text-90">T-Shirt</span>
                                <span class="text-600 text-xl font-medium ml-auto">89</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="surface-ground">
                        <div class="grid">
                            <div class="col-12 lg:col-4 p-2">
                                <div class="shadow-2 surface-card border-round p-4 h-full">
                                    <div class="flex align-items-start mb-5">
                                        <img src="images/blocks/avatars/circle-big/avatar-m-1.png" width="56" height="56" />
                                        <div class="ml-3">
                                            <span class="block text-900 mb-1 text-xl font-medium">Cameron Williamson</span>
                                            <p class="text-600 mt-0 mb-0">Marketing Coordinator</p>
                                        </div>
                                    </div>
                                    <ul class="list-none p-0 m-0">
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-twitter mr-2"></i>
                                                    <span class="font-medium text-900">Twitter</span>
                                                </span>
                                                <span class="text-cyan-500 font-medium">34.00%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-cyan-500 h-full" style="width:34%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-facebook mr-2"></i>
                                                    <span class="font-medium text-900">Facebook</span>
                                                </span>
                                                <span class="text-indigo-500 font-medium">45.86%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-indigo-500 h-full" style="width:45%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-google mr-2"></i>
                                                    <span class="font-medium text-900">Google</span>
                                                </span>
                                                <span class="text-orange-500 font-medium">79.00%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-orange-500 h-full" style="width:79%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 lg:col-4 p-2">
                                <div class="shadow-2 surface-card border-round p-4 h-full">
                                    <div class="flex align-items-start mb-5">
                                        <img src="images/blocks/avatars/circle-big/avatar-f-2.png" width="56" height="56" />
                                        <div class="ml-3">
                                            <span class="block text-900 mb-1 text-xl font-medium">Kathryn Murphy</span>
                                            <p class="text-600 mt-0 mb-0">Sales Manager</p>
                                        </div>
                                    </div>
                                    <ul class="list-none p-0 m-0">
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-twitter mr-2"></i>
                                                    <span class="font-medium text-900">Twitter</span>
                                                </span>
                                                <span class="text-cyan-500 font-medium">64.47%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-cyan-500 h-full" style="width:64%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-facebook mr-2"></i>
                                                    <span class="font-medium text-900">Facebook</span>
                                                </span>
                                                <span class="text-indigo-500 font-medium">75.67%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-indigo-500 h-full" style="width:75%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-google mr-2"></i>
                                                    <span class="font-medium text-900">Google</span>
                                                </span>
                                                <span class="text-orange-500 font-medium">45.00%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-orange-500 h-full" style="width:45%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 lg:col-4 p-2">
                                <div class="shadow-2 surface-card border-round p-4 h-full">
                                    <div class="flex align-items-start mb-5">
                                        <img src="images/blocks/avatars/circle-big/avatar-m-3.png" width="56" height="56" />
                                        <div class="ml-3">
                                            <span class="block text-900 mb-1 text-xl font-medium">Darrell Steward</span>
                                            <p class="text-600 mt-0 mb-0">Web Designer</p>
                                        </div>
                                    </div>
                                    <ul class="list-none p-0 m-0">
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-twitter mr-2"></i>
                                                    <span class="font-medium text-900">Twitter</span>
                                                </span>
                                                <span class="text-cyan-500 font-medium">23.55%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-cyan-500 h-full" style="width:34%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li class="mb-5">
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-facebook mr-2"></i>
                                                    <span class="font-medium text-900">Facebook</span>
                                                </span>
                                                <span class="text-indigo-500 font-medium">78.65%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-indigo-500 h-full" style="width:45%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="flex justify-content-between align-items-center">
                                                <span class="text-900 inline-flex justify-content-between align-items-center">
                                                    <i class="pi pi-google mr-2"></i>
                                                    <span class="font-medium text-900">Google</span>
                                                </span>
                                                <span class="text-orange-500 font-medium">86.54%</span>
                                            </div>
                                            <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                                                <div class="bg-orange-500 h-full" style="width:79%; border-radius: 4px"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        };
    },
};
</script>
