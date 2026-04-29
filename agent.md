We are going to build a web application for budget tracking app
intially user need to set their limit and bank balance amount
user will set the limit of each month.
each day user will enter their transaction with note and amount user can enter n number of transaction per day

if user exp3nse near the 50% the balace amount will chnage the yellow color and indicate user used expense your 50% limit if its 80% the entire dashboard will change to danger mode and need to alert the user

i will tell the full flow 

first entry page:

need to enter the bank name
code: mandatory need to enter last four digit of account number to show in the wallet section

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Connect Your Account - FinControl</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-high": "#eae7e9",
                    "outline-variant": "#c6c6cd",
                    "on-tertiary-fixed-variant": "#574425",
                    "on-primary-fixed-variant": "#3f465c",
                    "on-surface": "#1b1b1d",
                    "surface-container-lowest": "#ffffff",
                    "on-surface-variant": "#45464d",
                    "on-primary-fixed": "#131b2e",
                    "surface-bright": "#fcf8fa",
                    "error": "#ba1a1a",
                    "primary-fixed-dim": "#bec6e0",
                    "primary-fixed": "#dae2fd",
                    "tertiary-fixed": "#fcdeb5",
                    "tertiary-container": "#271901",
                    "on-primary": "#ffffff",
                    "outline": "#76777d",
                    "on-tertiary-fixed": "#271901",
                    "background": "#fcf8fa",
                    "on-secondary": "#ffffff",
                    "on-tertiary-container": "#98805d",
                    "surface-variant": "#e4e2e4",
                    "surface-dim": "#dcd9db",
                    "surface-container-highest": "#e4e2e4",
                    "secondary-container": "#d0e1fb",
                    "on-secondary-fixed": "#0b1c30",
                    "tertiary-fixed-dim": "#dec29a",
                    "primary": "#000000",
                    "error-container": "#ffdad6",
                    "inverse-primary": "#bec6e0",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#7c839b",
                    "surface-container-low": "#f6f3f5",
                    "surface-container": "#f0edef",
                    "on-secondary-container": "#54647a",
                    "secondary": "#505f76",
                    "inverse-surface": "#303032",
                    "secondary-fixed": "#d3e4fe",
                    "surface-tint": "#565e74",
                    "on-error": "#ffffff",
                    "tertiary": "#000000",
                    "on-background": "#1b1b1d",
                    "on-error-container": "#93000a",
                    "surface": "#fcf8fa",
                    "primary-container": "#131b2e",
                    "on-secondary-fixed-variant": "#38485d",
                    "inverse-on-surface": "#f3f0f2",
                    "secondary-fixed-dim": "#b7c8e1"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1280px",
                    "xs": "4px",
                    "gutter": "24px",
                    "base": "8px",
                    "md": "16px",
                    "lg": "24px",
                    "sm": "8px",
                    "xl": "40px"
            },
            "fontFamily": {
                    "display-lg": ["Public Sans"],
                    "display-sm": ["Public Sans"],
                    "numeric-data": ["Public Sans"],
                    "body-lg": ["Public Sans"],
                    "body-md": ["Public Sans"],
                    "label-md": ["Public Sans"],
                    "label-sm": ["Public Sans"],
                    "headline-md": ["Public Sans"]
            },
            "fontSize": {
                    "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "display-sm": ["30px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "numeric-data": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                    "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
            }
          }
        }
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        body {
            background-color: #fcf8fa;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body-md text-on-surface antialiased">
<!-- TopAppBar Mapping -->
<header class="bg-slate-50 border-b border-slate-200 sticky top-0 z-50">
<div class="flex items-center justify-between px-4 h-16 w-full max-w-7xl mx-auto">
<div class="flex items-center gap-4">
<button class="hover:bg-slate-100 transition-colors p-2 rounded-full active:opacity-70">
<span class="material-symbols-outlined text-slate-900" data-icon="arrow_back">arrow_back</span>
</button>
<h1 class="font-public-sans font-semibold text-lg tracking-tight text-slate-900">Connect Account</h1>
</div>
<div class="w-10"></div> <!-- Spacer for symmetry -->
</div>
</header>
<main class="flex min-h-[calc(100vh-64px)] items-center justify-center p-gutter">
<div class="w-full max-w-lg">
<!-- Illustration / Icon Section -->
<div class="mb-xl flex flex-col items-center text-center">
<div class="w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center mb-md">
<span class="material-symbols-outlined text-on-secondary-container text-4xl" data-icon="account_balance">account_balance</span>
</div>
<h2 class="font-display-sm text-display-sm text-on-surface mb-xs">Connect Your Account</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">Enter your bank details to start tracking your finances.</p>
</div>
<!-- Onboarding Card -->
<div class="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<form class="space-y-lg" onsubmit="return false;">
<!-- Bank Name Input -->
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface" for="bank_name">Bank Name</label>
<div class="relative group">
<input class="w-full h-12 px-md font-body-md border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all outline-none bg-surface-bright" id="bank_name" name="bank_name" placeholder="e.g. Chase Bank" type="text"/>
</div>
</div>
<!-- Last 4 Digits Input -->
<div class="space-y-xs">
<label class="font-label-md text-label-md text-on-surface" for="account_last_four">Last 4 Digits of Account Number</label>
<div class="relative flex items-center">
<div class="absolute left-md flex items-center gap-xs pointer-events-none text-outline">
<span class="material-symbols-outlined text-[18px]" data-icon="lock">lock</span>
<span class="font-numeric-data">•••• •••• ••••</span>
</div>
<input class="w-full h-12 pl-[140px] pr-md font-numeric-data border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all outline-none bg-surface-bright placeholder:text-outline-variant" id="account_last_four" maxlength="4" name="account_last_four" placeholder="1234" type="text"/>
</div>
</div>
<!-- Information Disclosure -->
<div class="flex gap-md p-md bg-surface-container-low rounded-lg border border-outline-variant/30">
<span class="material-symbols-outlined text-on-secondary-container" data-icon="verified_user">verified_user</span>
<p class="font-label-sm text-label-sm text-on-surface-variant">
                            Your financial security is our priority. We use 256-bit encryption to protect your account details.
                        </p>
</div>
<!-- CTA Button -->
<button class="w-full h-14 bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm shadow-sm" type="submit">
<span>Add Account</span>
<span class="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</form>
</div>
<!-- Alternative Methods -->
<div class="mt-lg text-center">
</div>
</div>
</main>
<!-- Aesthetic Decorative Element (Bento-style detail) -->
<div class="fixed bottom-gutter right-gutter hidden lg:block max-w-[280px]">
<div class="bg-white/80 backdrop-blur-sm border border-outline-variant p-md rounded-xl shadow-xl">
<div class="flex items-center gap-md mb-sm">
<div class="p-xs bg-tertiary-container rounded-lg">
<span class="material-symbols-outlined text-tertiary-fixed text-[20px]" data-icon="savings">savings</span>
</div>
<span class="font-label-md text-on-surface">Live Dashboard</span>
</div>
<div class="space-y-sm">
<div class="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-primary w-[65%]"></div>
</div>
<div class="flex justify-between font-numeric-data text-label-sm">
<span class="text-on-surface-variant">Savings Goal</span>
<span class="text-primary">$12,450.00</span>
</div>
</div>
</div>
</div>
<!-- BottomNavBar (Hidden during focused onboarding task as per Shell Visibility Rule) -->
</body></html>

next page: set balance and limit

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Onboarding - FinControl</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error-container": "#ffdad6",
                        "outline-variant": "#c6c6cd",
                        "inverse-surface": "#303032",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#54647a",
                        "primary": "#000000",
                        "primary-fixed": "#dae2fd",
                        "surface-container-high": "#eae7e9",
                        "primary-container": "#131b2e",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#271901",
                        "primary-fixed-dim": "#bec6e0",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e4e2e4",
                        "surface-bright": "#fcf8fa",
                        "on-background": "#1b1b1d",
                        "inverse-primary": "#bec6e0",
                        "tertiary-fixed-dim": "#dec29a",
                        "secondary-fixed-dim": "#b7c8e1",
                        "background": "#fcf8fa",
                        "surface-container-low": "#f6f3f5",
                        "on-secondary-fixed-variant": "#38485d",
                        "surface": "#fcf8fa",
                        "secondary": "#505f76",
                        "on-primary": "#ffffff",
                        "tertiary": "#000000",
                        "on-secondary-fixed": "#0b1c30",
                        "on-primary-fixed": "#131b2e",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#45464d",
                        "on-primary-fixed-variant": "#3f465c",
                        "secondary-container": "#d0e1fb",
                        "on-surface": "#1b1b1d",
                        "tertiary-container": "#271901",
                        "inverse-on-surface": "#f3f0f2",
                        "surface-container": "#f0edef",
                        "surface-tint": "#565e74",
                        "outline": "#76777d",
                        "on-tertiary-fixed-variant": "#574425",
                        "surface-dim": "#dcd9db",
                        "on-tertiary-container": "#98805d",
                        "on-primary-container": "#7c839b",
                        "secondary-fixed": "#d3e4fe",
                        "tertiary-fixed": "#fcdeb5",
                        "surface-variant": "#e4e2e4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "24px",
                        "xl": "40px",
                        "xs": "4px",
                        "base": "8px",
                        "sm": "8px",
                        "md": "16px",
                        "container-max": "1280px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "display-lg": ["Public Sans"],
                        "numeric-data": ["Public Sans"],
                        "body-md": ["Public Sans"],
                        "display-sm": ["Public Sans"],
                        "headline-md": ["Public Sans"],
                        "body-lg": ["Public Sans"],
                        "label-sm": ["Public Sans"],
                        "label-md": ["Public Sans"]
                    },
                    "fontSize": {
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "numeric-data": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "display-sm": ["30px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        body { font-family: 'Public Sans', sans-serif; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface-container-low min-h-screen flex items-center justify-center p-md sm:p-lg antialiased">
<!-- 
        Navigation Shell Suppressed:
        As per constraints, "Automatic Suppression: You MUST exclude the navigation shell if the page intent is: Linear/Transactional: Login, Sign-up, Onboarding..."
    -->
<main class="w-full max-w-[480px]">
<!-- Brand Header Context -->
<div class="flex justify-center mb-xl">
<div class="flex items-center gap-sm">
<div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">wallet</span>
</div>
<span class="font-headline-md text-headline-md text-on-surface tracking-tight">FinControl</span>
</div>
</div>
<!-- Main Onboarding Card -->
<div class="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.02)] border border-surface-variant overflow-hidden">
<div class="p-xl border-b border-surface-variant bg-surface text-center">
<h1 class="font-display-sm text-display-sm text-on-surface mb-sm">Set your baseline</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Enter your starting numbers to help us build your personalized dashboard.</p>
</div>
<div class="p-xl space-y-xl">
<!-- Input: Total Bank Balance -->
<div class="group">
<label class="block font-label-md text-label-md text-on-surface mb-sm flex items-center justify-between" for="bank_balance">
                        Total Bank Balance
                        <span class="material-symbols-outlined text-[16px] text-on-surface-variant cursor-help" title="Combined total of checking and savings">info</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
<span class="font-headline-md text-headline-md text-on-surface-variant">$</span>
</div>
<!-- Using headline-md for large format numeric input as per guidelines -->
<input class="block w-full pl-[2.5rem] pr-md py-md bg-surface border border-outline-variant rounded-lg font-headline-md text-headline-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-2 focus:border-primary transition-colors" id="bank_balance" name="bank_balance" placeholder="0.00" type="text"/>
</div>
</div>
<!-- Input: Daily Spending Limit -->
<div class="group">
<label class="block font-label-md text-label-md text-on-surface mb-sm flex items-center justify-between" for="daily_limit">
                        Daily Spending Limit
                        <span class="material-symbols-outlined text-[16px] text-on-surface-variant cursor-help" title="Your target maximum spend per day">info</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
<span class="font-headline-md text-headline-md text-on-surface-variant">$</span>
</div>
<input class="block w-full pl-[2.5rem] pr-md py-md bg-surface border border-outline-variant rounded-lg font-headline-md text-headline-md text-on-surface placeholder:text-outline-variant focus:ring-0 focus:border-2 focus:border-primary transition-colors" id="daily_limit" name="daily_limit" placeholder="0.00" type="text"/>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-sm">This helps calculate your pacing alerts.</p>
</div>
</div>
<div class="p-xl bg-surface-container-low border-t border-surface-variant">
<button class="w-full py-md px-lg bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-on-surface-variant transition-colors active:scale-[0.98]" type="button">
                    Get Started
                    <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div class="mt-md text-center">
<p class="font-label-sm text-label-sm text-on-surface-variant">You can always adjust these settings later in your profile.</p>
</div>
</div>
</div>
</main>
</body></html>

use this style and template 

use indian rupee symbol

user need to enter the total balance and monthly budget limit both field are mandatory

next page: dash board

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinControl - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error-container": "#ffdad6",
                        "outline-variant": "#c6c6cd",
                        "inverse-surface": "#303032",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#54647a",
                        "primary": "#000000",
                        "primary-fixed": "#dae2fd",
                        "surface-container-high": "#eae7e9",
                        "primary-container": "#131b2e",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#271901",
                        "primary-fixed-dim": "#bec6e0",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e4e2e4",
                        "surface-bright": "#fcf8fa",
                        "on-background": "#1b1b1d",
                        "inverse-primary": "#bec6e0",
                        "tertiary-fixed-dim": "#dec29a",
                        "secondary-fixed-dim": "#b7c8e1",
                        "background": "#fcf8fa",
                        "surface-container-low": "#f6f3f5",
                        "on-secondary-fixed-variant": "#38485d",
                        "surface": "#fcf8fa",
                        "secondary": "#505f76",
                        "on-primary": "#ffffff",
                        "tertiary": "#000000",
                        "on-secondary-fixed": "#0b1c30",
                        "on-primary-fixed": "#131b2e",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#45464d",
                        "on-primary-fixed-variant": "#3f465c",
                        "secondary-container": "#d0e1fb",
                        "on-surface": "#1b1b1d",
                        "tertiary-container": "#271901",
                        "inverse-on-surface": "#f3f0f2",
                        "surface-container": "#f0edef",
                        "surface-tint": "#565e74",
                        "outline": "#76777d",
                        "on-tertiary-fixed-variant": "#574425",
                        "surface-dim": "#dcd9db",
                        "on-tertiary-container": "#98805d",
                        "on-primary-container": "#7c839b",
                        "secondary-fixed": "#d3e4fe",
                        "tertiary-fixed": "#fcdeb5",
                        "surface-variant": "#e4e2e4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "24px",
                        "xl": "40px",
                        "xs": "4px",
                        "base": "8px",
                        "sm": "8px",
                        "md": "16px",
                        "container-max": "1280px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "display-lg": ["Public Sans"],
                        "numeric-data": ["Public Sans"],
                        "body-md": ["Public Sans"],
                        "display-sm": ["Public Sans"],
                        "headline-md": ["Public Sans"],
                        "body-lg": ["Public Sans"],
                        "label-sm": ["Public Sans"],
                        "label-md": ["Public Sans"]
                    },
                    "fontSize": {
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "numeric-data": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "display-sm": ["30px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-[#F8FAFC] text-on-background font-body-md min-h-screen flex flex-col antialiased">
<!-- TopAppBar (Web & Tablet) -->
<header class="hidden md:flex justify-between items-center w-full px-6 py-3 bg-[#F8FAFC] text-[#0F172A] font-['Public_Sans'] antialiased border-b border-[#E2E8F0] docked full-width top-0 sticky z-50">
<div class="flex items-center gap-4">
<img alt="User profile avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="professional headshot of a person looking at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRPdP_8lUgjwY8qiB1SNq3ZtufTFJnOVYSSr7r8kpGiCBBf5amwrUH7eVfj-UG7sWrRkmXlh87zjpV9l8z6wnFDodCy5_SZMadftOVA24ORN7imfad61c2FhyH1orFVXoqf8GYI_xI67A5JLbMqxYAFDTzulBmvL-EyH6vp658cGUThcq3qA32ZogSRvTMOzu8upfEQhtBY5zfE7wgIMa3Bgml7F3ATkBRfUIZEzxPlh3S42k1IslB2g3EtyRtzw3vlvaGZ7VICA"/>
<span class="text-lg font-bold text-[#0F172A]">FinControl</span>
</div>
<nav class="flex gap-6">
<a class="text-[#0F172A] font-bold hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg bg-slate-100" href="#">Dashboard</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Reports</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Wallets</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Settings</a>
</nav>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 text-[#0F172A]">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">notifications</span>
</button>
</header>
<!-- TopAppBar (Mobile) -->
<header class="flex md:hidden justify-between items-center w-full px-6 py-3 bg-[#F8FAFC] text-[#0F172A] font-['Public_Sans'] antialiased border-b border-[#E2E8F0] docked full-width top-0 sticky z-50">
<img alt="User profile avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="professional headshot of a person looking at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy2BTNlFHxfsqYNFfj1PO4ypwo6efQm9ue_NgX5BIu9s0_fZtVU4r20Ldybwcu9Vuu6kOcYJa40YEs9rUs8HOGEKg1qOTOBM8WZNt23OCQDKDD1ekVE5ummWLltn2NMJjal7up9ug3fu7uwXaP8OD_B_WJArGnXp-b9t-VRFRSJBtEKrC3OBtQjsrxgMmRAbYJrx82v-Lwj_UF0zIX1YRYixpA91zklGJ5tUo4XLaRIMCeXonuhbda5knrMS2FPUJOvvyQIqbltQ"/>
<span class="text-lg font-bold text-[#0F172A]">FinControl</span>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 text-[#0F172A]">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">notifications</span>
</button>
</header>
<!-- Main Canvas -->
<main class="flex-1 w-full max-w-[1280px] mx-auto px-6 py-xl md:py-[40px] pb-[100px] md:pb-xl flex flex-col gap-xl">
<!-- Welcome & High-level Metric -->
<section class="flex flex-col gap-sm">
<h1 class="font-headline-md text-headline-md text-on-surface">Overview</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Here is your financial summary for today.</p>
</section>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-md">
<!-- Bank Balance Card (Large, Primary Focus) -->
<div class="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[240px] relative overflow-hidden">
<!-- Decorative background element -->
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div class="flex justify-between items-start z-10">
<div class="flex flex-col gap-xs">
<span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">account_balance</span>
                            Main Checking
                        </span>
<h2 class="font-display-lg text-display-lg text-on-surface tracking-tight mt-2">$12,450.00</h2>
</div>
<div class="bg-surface-container px-3 py-1 rounded-full flex items-center gap-1 border border-outline-variant/50">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Active</span>
</div>
</div>
<div class="flex gap-4 mt-8 z-10">
<button class="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Transfer</button>
<button class="border border-outline-variant text-on-surface font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors">Details</button>
</div>
</div>
<!-- Daily Limit Card (Safe State) -->
<div class="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[240px]">
<div class="flex justify-between items-start">
<span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">track_changes</span>
                        Daily Limit
                    </span>
<span class="bg-emerald-50 text-emerald-700 font-label-sm text-label-sm px-2 py-1 rounded border border-emerald-200">Safe</span>
</div>
<div class="flex flex-col gap-xs my-4">
<div class="flex items-end gap-2">
<span class="font-display-sm text-display-sm text-on-surface">$35.00</span>
<span class="font-body-md text-body-md text-on-surface-variant mb-1">/ $100.00</span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant">35% utilized today</p>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: 35%;"></div>
</div>
</div>
<!-- Recent Transactions List -->
<div class="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Transactions</h3>
<button class="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1">
                        View All <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div class="flex flex-col">
<!-- Transaction Row 1 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">local_cafe</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Morning Coffee</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Today, 8:45 AM</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$4.50</span>
</div>
<!-- Transaction Row 2 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">shopping_cart</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Grocery Store</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Today, 1:20 PM</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$28.50</span>
</div>
<!-- Transaction Row 3 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">arrow_downward</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Salary Deposit</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-emerald-600">+$3,200.00</span>
</div>
<!-- Transaction Row 4 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">directions_car</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Gas Station</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Oct 24, 2023</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$45.00</span>
</div>
</div>
</div>
</div>
</main>
<!-- Floating Action Button -->
<button class="fixed bottom-[88px] md:bottom-8 right-6 w-14 h-14 bg-primary-container text-on-primary-container rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex items-center justify-center hover:opacity-90 transition-all active:scale-95 z-40">
<span class="material-symbols-outlined text-[24px]">add</span>
</button>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-[#E2E8F0] shadow-[0_-1px_3px_0_rgba(0,0,0,0.02)] font-['Public_Sans'] text-xs font-medium">
<a class="flex flex-col items-center justify-center text-[#0F172A] bg-slate-100 rounded-lg px-3 py-1 transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">dashboard</span>
            Dashboard
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">analytics</span>
            Reports
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">account_balance_wallet</span>
            Wallets
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">settings</span>
            Settings
        </a>
</nav>
</body></html>

use this template and style 

change that main Checking to ui like in our second code that yellow ui 

and that daily limit it not daily limit its monthly limit 

and that recent transation the last four transaction need to show in ui if user click view all need to show all the transaction of current month upto date 

if user click the + button they will enter the expense 

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinControl - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error-container": "#ffdad6",
                        "outline-variant": "#c6c6cd",
                        "inverse-surface": "#303032",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#54647a",
                        "primary": "#000000",
                        "primary-fixed": "#dae2fd",
                        "surface-container-high": "#eae7e9",
                        "primary-container": "#131b2e",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#271901",
                        "primary-fixed-dim": "#bec6e0",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e4e2e4",
                        "surface-bright": "#fcf8fa",
                        "on-background": "#1b1b1d",
                        "inverse-primary": "#bec6e0",
                        "tertiary-fixed-dim": "#dec29a",
                        "secondary-fixed-dim": "#b7c8e1",
                        "background": "#fcf8fa",
                        "surface-container-low": "#f6f3f5",
                        "on-secondary-fixed-variant": "#38485d",
                        "surface": "#fcf8fa",
                        "secondary": "#505f76",
                        "on-primary": "#ffffff",
                        "tertiary": "#000000",
                        "on-secondary-fixed": "#0b1c30",
                        "on-primary-fixed": "#131b2e",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#45464d",
                        "on-primary-fixed-variant": "#3f465c",
                        "secondary-container": "#d0e1fb",
                        "on-surface": "#1b1b1d",
                        "tertiary-container": "#271901",
                        "inverse-on-surface": "#f3f0f2",
                        "surface-container": "#f0edef",
                        "surface-tint": "#565e74",
                        "outline": "#76777d",
                        "on-tertiary-fixed-variant": "#574425",
                        "surface-dim": "#dcd9db",
                        "on-tertiary-container": "#98805d",
                        "on-primary-container": "#7c839b",
                        "secondary-fixed": "#d3e4fe",
                        "tertiary-fixed": "#fcdeb5",
                        "surface-variant": "#e4e2e4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "24px",
                        "xl": "40px",
                        "xs": "4px",
                        "base": "8px",
                        "sm": "8px",
                        "md": "16px",
                        "container-max": "1280px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "display-lg": ["Public Sans"],
                        "numeric-data": ["Public Sans"],
                        "body-md": ["Public Sans"],
                        "display-sm": ["Public Sans"],
                        "headline-md": ["Public Sans"],
                        "body-lg": ["Public Sans"],
                        "label-sm": ["Public Sans"],
                        "label-md": ["Public Sans"]
                    },
                    "fontSize": {
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "numeric-data": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "display-sm": ["30px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-[#F8FAFC] text-on-background font-body-md min-h-screen flex flex-col antialiased">
<!-- TopAppBar (Web & Tablet) -->
<header class="hidden md:flex justify-between items-center w-full px-6 py-3 bg-[#F8FAFC] text-[#0F172A] font-['Public_Sans'] antialiased border-b border-[#E2E8F0] docked full-width top-0 sticky z-50">
<div class="flex items-center gap-4">
<img alt="User profile avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="professional headshot of a person looking at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRPdP_8lUgjwY8qiB1SNq3ZtufTFJnOVYSSr7r8kpGiCBBf5amwrUH7eVfj-UG7sWrRkmXlh87zjpV9l8z6wnFDodCy5_SZMadftOVA24ORN7imfad61c2FhyH1orFVXoqf8GYI_xI67A5JLbMqxYAFDTzulBmvL-EyH6vp658cGUThcq3qA32ZogSRvTMOzu8upfEQhtBY5zfE7wgIMa3Bgml7F3ATkBRfUIZEzxPlh3S42k1IslB2g3EtyRtzw3vlvaGZ7VICA"/>
<span class="text-lg font-bold text-[#0F172A]">FinControl</span>
</div>
<nav class="flex gap-6">
<a class="text-[#0F172A] font-bold hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg bg-slate-100" href="#">Dashboard</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Reports</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Wallets</a>
<a class="text-slate-500 hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg" href="#">Settings</a>
</nav>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 text-[#0F172A]">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">notifications</span>
</button>
</header>
<!-- TopAppBar (Mobile) -->
<header class="flex md:hidden justify-between items-center w-full px-6 py-3 bg-[#F8FAFC] text-[#0F172A] font-['Public_Sans'] antialiased border-b border-[#E2E8F0] docked full-width top-0 sticky z-50">
<img alt="User profile avatar" class="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="professional headshot of a person looking at the camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy2BTNlFHxfsqYNFfj1PO4ypwo6efQm9ue_NgX5BIu9s0_fZtVU4r20Ldybwcu9Vuu6kOcYJa40YEs9rUs8HOGEKg1qOTOBM8WZNt23OCQDKDD1ekVE5ummWLltn2NMJjal7up9ug3fu7uwXaP8OD_B_WJArGnXp-b9t-VRFRSJBtEKrC3OBtQjsrxgMmRAbYJrx82v-Lwj_UF0zIX1YRYixpA91zklGJ5tUo4XLaRIMCeXonuhbda5knrMS2FPUJOvvyQIqbltQ"/>
<span class="text-lg font-bold text-[#0F172A]">FinControl</span>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer active:opacity-70 text-[#0F172A]">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">notifications</span>
</button>
</header>
<!-- Main Canvas -->
<main class="flex-1 w-full max-w-[1280px] mx-auto px-6 py-xl md:py-[40px] pb-[100px] md:pb-xl flex flex-col gap-xl">
<!-- Welcome & High-level Metric -->
<section class="flex flex-col gap-sm">
<h1 class="font-headline-md text-headline-md text-on-surface">Overview</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Here is your financial summary for today.</p>
</section>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-md">
<!-- Bank Balance Card (Large, Primary Focus) -->
<div class="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[240px] relative overflow-hidden">
<!-- Decorative background element -->
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div class="flex justify-between items-start z-10">
<div class="flex flex-col gap-xs">
<span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">account_balance</span>
                            Main Checking
                        </span>
<h2 class="font-display-lg text-display-lg text-on-surface tracking-tight mt-2">$12,450.00</h2>
</div>
<div class="bg-surface-container px-3 py-1 rounded-full flex items-center gap-1 border border-outline-variant/50">
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Active</span>
</div>
</div>
<div class="flex gap-4 mt-8 z-10">
<button class="bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">Transfer</button>
<button class="border border-outline-variant text-on-surface font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors">Details</button>
</div>
</div>
<!-- Daily Limit Card (Safe State) -->
<div class="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[240px]">
<div class="flex justify-between items-start">
<span class="font-label-md text-label-md text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">track_changes</span>
                        Daily Limit
                    </span>
<span class="bg-emerald-50 text-emerald-700 font-label-sm text-label-sm px-2 py-1 rounded border border-emerald-200">Safe</span>
</div>
<div class="flex flex-col gap-xs my-4">
<div class="flex items-end gap-2">
<span class="font-display-sm text-display-sm text-on-surface">$35.00</span>
<span class="font-body-md text-body-md text-on-surface-variant mb-1">/ $100.00</span>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant">35% utilized today</p>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: 35%;"></div>
</div>
</div>
<!-- Recent Transactions List -->
<div class="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div class="flex justify-between items-center mb-6">
<h3 class="font-headline-md text-headline-md text-on-surface">Recent Transactions</h3>
<button class="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1">
                        View All <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div class="flex flex-col">
<!-- Transaction Row 1 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">local_cafe</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Morning Coffee</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Today, 8:45 AM</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$4.50</span>
</div>
<!-- Transaction Row 2 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">shopping_cart</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Grocery Store</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Today, 1:20 PM</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$28.50</span>
</div>
<!-- Transaction Row 3 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">arrow_downward</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Salary Deposit</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Yesterday</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-emerald-600">+$3,200.00</span>
</div>
<!-- Transaction Row 4 -->
<div class="flex items-center justify-between py-4 border-b border-surface-container-highest last:border-0 hover:bg-surface-container-lowest transition-colors group cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary-fixed group-hover:text-primary-container transition-colors">
<span class="material-symbols-outlined">directions_car</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Gas Station</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Oct 24, 2023</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$45.00</span>
</div>
</div>
</div>
</div>
</main>
<!-- Floating Action Button -->
<button class="fixed bottom-[88px] md:bottom-8 right-6 w-14 h-14 bg-primary-container text-on-primary-container rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.1)] flex items-center justify-center hover:opacity-90 transition-all active:scale-95 z-40">
<span class="material-symbols-outlined text-[24px]">add</span>
</button>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe bg-white border-t border-[#E2E8F0] shadow-[0_-1px_3px_0_rgba(0,0,0,0.02)] font-['Public_Sans'] text-xs font-medium">
<a class="flex flex-col items-center justify-center text-[#0F172A] bg-slate-100 rounded-lg px-3 py-1 transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">dashboard</span>
            Dashboard
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">analytics</span>
            Reports
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">account_balance_wallet</span>
            Wallets
        </a>
<a class="flex flex-col items-center justify-center text-slate-400 px-3 py-1 hover:text-[#0F172A] transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 0;">settings</span>
            Settings
        </a>
</nav>
</body></html>

for droop =down use this 

🏠 Housing & Utilities
Rent / Home Loan (EMI): The largest recurring expense for most.
Maintenance & Society Charges: Common in apartments.
Electricity: Often a variable but high-priority bill.
Water & Sewage: Often paid to the municipality.
Domestic Help / Maid: Wages for household staff (Maid, Driver, Cook).
🥗 Food & Dining
Groceries: Fresh produce, grains, and staples.
Dining Out / Restaurants: Eating at cafes or restaurants.
Online Food Delivery: Apps like Swiggy or Zomato.
Tea & Snacks: Small daily spends (Chai, Samosas).
🚗 Transport & Travel
Fuel (Petrol/Diesel/CNG): For personal vehicles.
Public Transport: Metro, Bus, Auto-rickshaw, or Train.
Cabs: Uber, Ola, or BluSmart.
Vehicle Maintenance: Servicing, repairs, and insurance premiums.
📱 Communication & Entertainment
Mobile & Internet: Recharge for phone and home Wi-Fi.
OTT Subscriptions: Netflix, Prime Video, Hotstar, etc.
Cable TV / DTH: Direct-to-home TV services.
Outings: Movies, concerts, or weekend trips.
🏥 Health & Wellness
Medicines: Regular or one-time pharmacy bills.
Doctor / Specialist: Consultation fees.
Gym & Fitness: Memberships or sports activities.
Health Insurance: Annual or monthly premiums.
🛍️ Lifestyle & Shopping
Clothing & Footwear: Fashion and apparel.
Electronics: Phones, gadgets, or home appliances.
Personal Care: Salon, spa, or grooming products.
Household Items: Detergents, cleaning supplies, or decor.
🎓 Education & Kids
School / College Fees: Tuition and admission fees.
Stationery & Books: Supplies for work or study.
Child Care: Daycare or specific kid-related needs.
💰 Savings & Debt
Investments: SIPs, Stocks, PPF, or Gold.
Personal Loan / Credit Card EMI: Repayment of debt.
Insurance (Life/Term): LIC or private term plans.
🕉️ Others (Unique to India)
Pooja & Religious: Offerings, incense, or ceremonies.
Festivals: Diwali, Eid, or Christmas shopping and gifts.
Gifts & Social: Shagun/Cash gifts for weddings or birthdays.
Charity / Donation: Direct help or NGO contributions.



in dashboard recent transactin need to show notes and for that time instean of time show the main and sub catagery like Food - Restaurants near the amount need 3dot icon if user click it need to show delete and edit option if user click edit need to edit the transaction if user click the delet it need to delete 

and if user user cross morethat 50% of their limit 

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinControl - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "error-container": "#ffdad6",
                      "outline-variant": "#c6c6cd",
                      "inverse-surface": "#303032",
                      "error": "#ba1a1a",
                      "on-secondary-container": "#54647a",
                      "primary": "#000000",
                      "primary-fixed": "#dae2fd",
                      "surface-container-high": "#eae7e9",
                      "primary-container": "#131b2e",
                      "on-error-container": "#93000a",
                      "on-tertiary-fixed": "#271901",
                      "primary-fixed-dim": "#bec6e0",
                      "on-error": "#ffffff",
                      "surface-container-highest": "#e4e2e4",
                      "surface-bright": "#fcf8fa",
                      "on-background": "#1b1b1d",
                      "inverse-primary": "#bec6e0",
                      "tertiary-fixed-dim": "#dec29a",
                      "secondary-fixed-dim": "#b7c8e1",
                      "background": "#fcf8fa",
                      "surface-container-low": "#f6f3f5",
                      "on-secondary-fixed-variant": "#38485d",
                      "surface": "#fcf8fa",
                      "secondary": "#505f76",
                      "on-primary": "#ffffff",
                      "tertiary": "#000000",
                      "on-secondary-fixed": "#0b1c30",
                      "on-primary-fixed": "#131b2e",
                      "on-tertiary": "#ffffff",
                      "surface-container-lowest": "#ffffff",
                      "on-secondary": "#ffffff",
                      "on-surface-variant": "#45464d",
                      "on-primary-fixed-variant": "#3f465c",
                      "secondary-container": "#d0e1fb",
                      "on-surface": "#1b1b1d",
                      "tertiary-container": "#271901",
                      "inverse-on-surface": "#f3f0f2",
                      "surface-container": "#f0edef",
                      "surface-tint": "#565e74",
                      "outline": "#76777d",
                      "on-tertiary-fixed-variant": "#574425",
                      "surface-dim": "#dcd9db",
                      "on-tertiary-container": "#98805d",
                      "on-primary-container": "#7c839b",
                      "secondary-fixed": "#d3e4fe",
                      "tertiary-fixed": "#fcdeb5",
                      "surface-variant": "#e4e2e4",
                      "warning-container": "#fef08a",
                      "on-warning-container": "#854d0e",
                      "warning": "#ca8a04"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "lg": "24px",
                      "xl": "40px",
                      "xs": "4px",
                      "base": "8px",
                      "sm": "8px",
                      "md": "16px",
                      "container-max": "1280px",
                      "gutter": "24px"
              },
              "fontFamily": {
                      "display-lg": [
                              "Public Sans"
                      ],
                      "numeric-data": [
                              "Public Sans"
                      ],
                      "body-md": [
                              "Public Sans"
                      ],
                      "display-sm": [
                              "Public Sans"
                      ],
                      "headline-md": [
                              "Public Sans"
                      ],
                      "body-lg": [
                              "Public Sans"
                      ],
                      "label-sm": [
                              "Public Sans"
                      ],
                      "label-md": [
                              "Public Sans"
                      ]
              },
              "fontSize": {
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "56px",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ],
                      "numeric-data": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "400"
                              }
                      ],
                      "display-sm": [
                              "30px",
                              {
                                      "lineHeight": "36px",
                                      "letterSpacing": "-0.01em",
                                      "fontWeight": "700"
                              }
                      ],
                      "headline-md": [
                              "24px",
                              {
                                      "lineHeight": "32px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-sm": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "letterSpacing": "0.02em",
                                      "fontWeight": "500"
                              }
                      ],
                      "label-md": [
                              "14px",
                              {
                                      "lineHeight": "20px",
                                      "letterSpacing": "0.01em",
                                      "fontWeight": "600"
                              }
                      ]
              }
            },
          }
        }
    </script>
<style>
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md min-h-screen pb-20 md:pb-0 antialiased">
<!-- TopAppBar -->
<header class="bg-[#F8FAFC] dark:bg-slate-950 text-[#0F172A] dark:text-slate-100 font-['Public_Sans'] antialiased docked full-width top-0 border-b border-[#E2E8F0] dark:border-slate-800 flat no shadows flex justify-between items-center w-full px-6 py-3 hidden md:flex sticky z-50">
<div class="flex items-center gap-4">
<div class="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
<img alt="User Profile" class="w-full h-full object-cover" data-alt="professional headshot of a person with a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-i7mZflShyzQIgdLqGz9MZ6yTy_eJBLLfZsW5ghWVPkECYnyOiz-WYQYuhUWyo2HOJWpJbbZNKVdCx2VI99xbFuG_mndjTpnVzX9Fz3SJ8u5OUsMcv9Ihyh8kE8DBTxaFZ3wjoZH-6z8EjYkmDJ8kJ583WQkKui5jy9PWDZmjt1i9jPrfmFbgCP11PNGVVnR_-3KSNDhpRoclXjWb9VA8flvJ9rEEtcRBx-2nlNPAk2y7v0lMKf6aQNofXd393Okmy4htVq2zHw"/>
</div>
<span class="text-lg font-bold text-[#0F172A] dark:text-slate-50">FinControl</span>
</div>
<nav class="flex gap-8">
<a class="text-[#0F172A] dark:text-white font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-xl">dashboard</span>
<span class="font-label-md text-label-md">Dashboard</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-xl">analytics</span>
<span class="font-label-md text-label-md">Reports</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-xl">account_balance_wallet</span>
<span class="font-label-md text-label-md">Wallets</span>
</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer active:opacity-70 px-4 py-2 rounded-lg flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-xl">settings</span>
<span class="font-label-md text-label-md">Settings</span>
</a>
</nav>
<button class="w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined">notifications</span>
</button>
</header>
<!-- Mobile Header (Fallback for when BottomNav is active) -->
<header class="md:hidden flex justify-between items-center w-full px-4 py-4 bg-background sticky top-0 z-40">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
<img alt="User Profile" class="w-full h-full object-cover" data-alt="professional headshot of a person with a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlmInNoVTLlz5FfcMf4eYy0yhMXJWSi2AWtiqKZXR4sWiFTuMhxdAK84QJ7hsy-FaZis7D0Aq8QmgJJhAZ686e6Deoz9p7sIVibJi10dbqSqS7Zw2TBRl42WfMjrfm2M4rSyrNIm3KQHu0mjNYECdyb3LJk03FORmdTh4UJ0am84GAliMz6lTcoDpOSkwftfi4FwplOSVYbgZ2Su5yAy-4pmTrZ06iXhXQIZdf-32Fo4Sqb276RpZCyzGKeqWK09DKILf-AqhNaw"/>
</div>
<span class="font-headline-md text-headline-md text-on-background">Dashboard</span>
</div>
<button class="w-10 h-10 rounded-full hover:bg-surface-variant transition-colors flex items-center justify-center text-on-surface-variant">
<span class="material-symbols-outlined">notifications</span>
</button>
</header>
<!-- Warning Banner -->
<div class="bg-warning-container text-on-warning-container px-6 py-3 flex items-center justify-center gap-3 w-full sticky md:top-[73px] top-[72px] z-30 shadow-sm border-b border-warning/20">
<span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">warning</span>
<p class="font-label-md text-label-md">You've used over 50% of your daily limit.</p>
</div>
<!-- Main Content Canvas -->
<main class="max-w-[1280px] mx-auto px-4 md:px-6 py-lg md:py-xl grid grid-cols-1 md:grid-cols-12 gap-md md:gap-gutter">
<!-- Primary Metrics (Bento Grid Style) -->
<div class="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-md md:gap-gutter mb-lg">
<!-- Daily Limit Card (Amber/Warning State) -->
<div class="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] col-span-1 md:col-span-2 flex flex-col justify-between relative overflow-hidden group">
<div class="absolute top-0 left-0 w-1 h-full bg-warning"></div>
<div class="flex justify-between items-start mb-lg">
<div>
<h2 class="font-label-md text-label-md text-on-surface-variant mb-xs">Today's Spend</h2>
<div class="flex items-baseline gap-2">
<span class="font-display-sm text-display-sm text-on-background">$65.40</span>
<span class="font-body-md text-body-md text-on-surface-variant">/ $100.00</span>
</div>
</div>
<div class="bg-warning-container text-on-warning-container px-2 py-1 rounded-DEFAULT font-label-sm text-label-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">trending_up</span>
<span>65%</span>
</div>
</div>
<div class="w-full bg-surface-variant rounded-full h-2 mt-auto">
<div class="bg-warning h-2 rounded-full" style="width: 65%"></div>
</div>
<p class="font-label-sm text-label-sm text-on-surface-variant mt-2 text-right">35% remaining</p>
</div>
<!-- Total Balance Card -->
<div class="bg-primary-container text-on-primary rounded-xl p-md shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] col-span-1 flex flex-col justify-between">
<div class="flex justify-between items-start mb-lg">
<h2 class="font-label-md text-label-md text-on-primary-container">Total Balance</h2>
<span class="material-symbols-outlined text-on-primary-container">account_balance</span>
</div>
<div>
<span class="font-display-sm text-display-sm block mb-xs">$12,450.00</span>
<p class="font-label-sm text-label-sm text-on-primary-container">+2.4% from last month</p>
</div>
</div>
</div>
<!-- Secondary Section: Recent Transactions & Quick Actions -->
<div class="col-span-1 md:col-span-8 flex flex-col gap-md">
<h3 class="font-headline-md text-headline-md text-on-background mb-sm">Recent Transactions</h3>
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] overflow-hidden">
<!-- Transaction Row -->
<div class="flex items-center justify-between p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">restaurant</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-background">Sweetgreen</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Food &amp; Dining • 12:30 PM</p>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-background">-$18.50</span>
</div>
<!-- Transaction Row -->
<div class="flex items-center justify-between p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">local_gas_station</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-background">Shell Station</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Transport • 09:15 AM</p>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-background">-$45.00</span>
</div>
<!-- Transaction Row -->
<div class="flex items-center justify-between p-md border-b border-surface-variant hover:bg-surface-container-low transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-[#e8def8] text-[#4a4458] flex items-center justify-center">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">subscriptions</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-background">Netflix</p>
<p class="font-label-sm text-label-sm text-on-surface-variant">Entertainment • Yesterday</p>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-background">-$15.99</span>
</div>
<div class="p-3 text-center">
<button class="font-label-md text-label-md text-primary hover:text-primary-container transition-colors">View All Transactions</button>
</div>
</div>
</div>
<!-- Tertiary Section: Budget Status -->
<div class="col-span-1 md:col-span-4 flex flex-col gap-md">
<h3 class="font-headline-md text-headline-md text-on-background mb-sm">Budget Health</h3>
<div class="bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] flex flex-col gap-4">
<!-- Category Progress -->
<div>
<div class="flex justify-between items-end mb-1">
<span class="font-label-md text-label-md text-on-background">Groceries</span>
<span class="font-numeric-data text-numeric-data text-on-surface-variant text-sm">$320 / $400</span>
</div>
<div class="w-full bg-surface-variant rounded-full h-1.5">
<div class="bg-warning h-1.5 rounded-full" style="width: 80%"></div>
</div>
</div>
<!-- Category Progress -->
<div>
<div class="flex justify-between items-end mb-1">
<span class="font-label-md text-label-md text-on-background">Transport</span>
<span class="font-numeric-data text-numeric-data text-on-surface-variant text-sm">$80 / $150</span>
</div>
<div class="w-full bg-surface-variant rounded-full h-1.5">
<div class="bg-secondary h-1.5 rounded-full" style="width: 53%"></div>
</div>
</div>
<!-- Category Progress -->
<div>
<div class="flex justify-between items-end mb-1">
<span class="font-label-md text-label-md text-on-background">Dining Out</span>
<span class="font-numeric-data text-numeric-data text-on-surface-variant text-sm">$190 / $200</span>
</div>
<div class="w-full bg-surface-variant rounded-full h-1.5">
<div class="bg-error h-1.5 rounded-full" style="width: 95%"></div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="md:hidden bg-white dark:bg-slate-900 text-[#0F172A] dark:text-slate-100 font-['Public_Sans'] text-xs font-medium docked full-width bottom-0 rounded-t-none border-t border-[#E2E8F0] dark:border-slate-800 shadow-[0_-1px_3px_0_rgba(0,0,0,0.02)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe">
<a class="flex flex-col items-center justify-center text-[#0F172A] dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1 transition-all duration-200 ease-in-out active:scale-95 hover:text-[#0F172A] dark:hover:text-white" href="#">
<span class="material-symbols-outlined mb-1" style="font-variation-settings: 'FILL' 1;">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 transition-all duration-200 ease-in-out active:scale-95 hover:text-[#0F172A] dark:hover:text-white" href="#">
<span class="material-symbols-outlined mb-1">analytics</span>
<span>Reports</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 transition-all duration-200 ease-in-out active:scale-95 hover:text-[#0F172A] dark:hover:text-white" href="#">
<span class="material-symbols-outlined mb-1">account_balance_wallet</span>
<span>Wallets</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 transition-all duration-200 ease-in-out active:scale-95 hover:text-[#0F172A] dark:hover:text-white" href="#">
<span class="material-symbols-outlined mb-1">settings</span>
<span>Settings</span>
</a>
</nav>
</body></html>

need to change the ui like this to yello color

that total balance need to reduce of each transation that add 

for rectent transtion use this ui 4 resent transacation and below the view all transaction button

and the budget health need to uodate dynamaically for what main cateagory we enter it need to show

before any entry that field is not required if any entry came need to show that with that respective category 

the amount is how much we spend on that specific category / total limit we set for all

i hope you understand this 

next if user expense more that 80% need to chznge the ui to red 

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>FinControl - Dashboard</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "error-container": "#ffdad6",
                        "outline-variant": "#c6c6cd",
                        "inverse-surface": "#303032",
                        "error": "#ba1a1a",
                        "on-secondary-container": "#54647a",
                        "primary": "#000000",
                        "primary-fixed": "#dae2fd",
                        "surface-container-high": "#eae7e9",
                        "primary-container": "#131b2e",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#271901",
                        "primary-fixed-dim": "#bec6e0",
                        "on-error": "#ffffff",
                        "surface-container-highest": "#e4e2e4",
                        "surface-bright": "#fcf8fa",
                        "on-background": "#1b1b1d",
                        "inverse-primary": "#bec6e0",
                        "tertiary-fixed-dim": "#dec29a",
                        "secondary-fixed-dim": "#b7c8e1",
                        "background": "#fcf8fa",
                        "surface-container-low": "#f6f3f5",
                        "on-secondary-fixed-variant": "#38485d",
                        "surface": "#fcf8fa",
                        "secondary": "#505f76",
                        "on-primary": "#ffffff",
                        "tertiary": "#000000",
                        "on-secondary-fixed": "#0b1c30",
                        "on-primary-fixed": "#131b2e",
                        "on-tertiary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#45464d",
                        "on-primary-fixed-variant": "#3f465c",
                        "secondary-container": "#d0e1fb",
                        "on-surface": "#1b1b1d",
                        "tertiary-container": "#271901",
                        "inverse-on-surface": "#f3f0f2",
                        "surface-container": "#f0edef",
                        "surface-tint": "#565e74",
                        "outline": "#76777d",
                        "on-tertiary-fixed-variant": "#574425",
                        "surface-dim": "#dcd9db",
                        "on-tertiary-container": "#98805d",
                        "on-primary-container": "#7c839b",
                        "secondary-fixed": "#d3e4fe",
                        "tertiary-fixed": "#fcdeb5",
                        "surface-variant": "#e4e2e4"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "24px",
                        "xl": "40px",
                        "xs": "4px",
                        "base": "8px",
                        "sm": "8px",
                        "md": "16px",
                        "container-max": "1280px",
                        "gutter": "24px"
                    },
                    "fontFamily": {
                        "display-lg": ["Public Sans"],
                        "numeric-data": ["Public Sans"],
                        "body-md": ["Public Sans"],
                        "display-sm": ["Public Sans"],
                        "headline-md": ["Public Sans"],
                        "body-lg": ["Public Sans"],
                        "label-sm": ["Public Sans"],
                        "label-md": ["Public Sans"]
                    },
                    "fontSize": {
                        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "numeric-data": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
                        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                        "display-sm": ["30px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                        "label-sm": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500" }],
                        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }]
                    }
                }
            }
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-error-container min-h-screen font-body-md text-body-md text-on-error-container pb-[80px] md:pb-0">
<!-- TopAppBar -->
<header class="docked full-width top-0 border-b border-[#E2E8F0] dark:border-slate-800 flat no shadows bg-[#F8FAFC] dark:bg-slate-950 flex justify-between items-center w-full px-6 py-3 fixed z-50">
<div class="flex items-center gap-md">
<div class="w-8 h-8 rounded-full bg-primary-container overflow-hidden flex-shrink-0">
<img alt="User Profile" class="w-full h-full object-cover" data-alt="professional headshot of a person looking forward against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-de5_PLFxITakLDXKteXhu-KHJ4ySs-99GHev6ScTLXm916o7GBfVsIrse8mkC8ymDkz0S1KVECs28aVGmWk7AJQKrGdnyM3qes0EBtx1nc8JhBfLggzC7SzcsFOnDuP2c-Pqx3ySO0OKdPXwvcpmCQ0RWKQZK9BWnu75Ad2nsLEdgOXuyiW2q29kEptrryFx4J6c4zh3RQojMwwvsTxUo83opmjMcuKq3LR-mgv42CVArNw8gQWNOYNMgAsn4lRBGQGvQgy01w"/>
</div>
<h1 class="font-['Public_Sans'] antialiased text-lg font-bold text-[#0F172A] dark:text-slate-50">FinControl</h1>
</div>
<div class="flex items-center">
<span class="material-symbols-outlined text-[#0F172A] dark:text-slate-100 cursor-pointer active:opacity-70 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors p-sm rounded-full">notifications</span>
</div>
</header>
<!-- Main Content Canvas -->
<main class="w-full max-w-container-max mx-auto px-4 md:px-gutter pt-[80px] md:pt-[100px] flex flex-col gap-xl">
<!-- CRITICAL ALERT BANNER -->
<div class="w-full bg-error rounded-xl p-lg flex items-center gap-md shadow-[0_4px_12px_rgba(186,26,26,0.15)]">
<span class="material-symbols-outlined fill text-on-error text-[32px]">warning</span>
<div class="flex flex-col">
<p class="font-headline-md text-headline-md text-on-error m-0">CRITICAL: You have exceeded 80% of your daily limit!</p>
<p class="font-body-md text-body-md text-error-container m-0 mt-xs">Immediate spending cessation recommended to stay within budget parameters.</p>
</div>
</div>
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Daily Limit Card (Danger Highlighted) -->
<section class="md:col-span-8 bg-surface-container-lowest rounded-xl border-2 border-error p-xl shadow-[0_4px_12px_rgba(186,26,26,0.08)] flex flex-col gap-lg">
<div class="flex justify-between items-start">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface m-0">Daily Spending Limit</h2>
<p class="font-body-md text-body-md text-on-surface-variant m-0 mt-xs">Reset in 08:42:15</p>
</div>
<span class="material-symbols-outlined text-error text-[32px]">speed</span>
</div>
<div class="flex flex-col gap-base">
<div class="flex justify-between items-end">
<div class="flex items-baseline gap-xs">
<span class="font-display-sm text-display-sm text-error">$142.50</span>
<span class="font-body-md text-body-md text-on-surface-variant">/ $150.00</span>
</div>
<span class="font-label-md text-label-md text-error bg-error-container px-sm py-xs rounded-DEFAULT">95% Used</span>
</div>
<!-- Limit Bar -->
<div class="w-full h-4 bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-error rounded-full" style="width: 95%;"></div>
</div>
</div>
<div class="flex gap-md mt-auto pt-md border-t border-outline-variant">
<button class="bg-error text-on-error font-label-md text-label-md px-md py-sm rounded-DEFAULT flex items-center gap-xs hover:bg-on-error-container transition-colors">
<span class="material-symbols-outlined text-[18px]">lock</span>
                        Lock Wallets
                    </button>
<button class="border border-error text-error font-label-md text-label-md px-md py-sm rounded-DEFAULT hover:bg-error-container transition-colors">
                        Review Transactions
                    </button>
</div>
</section>
<!-- Recent Transactions List -->
<section class="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-md">
<h3 class="font-headline-md text-headline-md text-on-surface m-0 mb-sm">Recent Activity</h3>
<div class="flex flex-col">
<!-- Transaction Row -->
<div class="flex justify-between items-center py-sm border-b border-surface-container-high last:border-0">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
<span class="material-symbols-outlined text-error">restaurant</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Bistro 77</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Dining</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$85.00</span>
</div>
<!-- Transaction Row -->
<div class="flex justify-between items-center py-sm border-b border-surface-container-high last:border-0">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-surface-variant">local_cafe</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">Daily Grind</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Coffee</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$6.50</span>
</div>
<!-- Transaction Row -->
<div class="flex justify-between items-center py-sm border-b border-surface-container-high last:border-0">
<div class="flex items-center gap-sm">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-surface-variant">directions_car</span>
</div>
<div class="flex flex-col">
<span class="font-label-md text-label-md text-on-surface">City Parking</span>
<span class="font-label-sm text-label-sm text-on-surface-variant">Transport</span>
</div>
</div>
<span class="font-numeric-data text-numeric-data text-on-surface">-$15.00</span>
</div>
</div>
</section>
</div>
</main>
<!-- BottomNavBar (Mobile Only) -->
<nav class="md:hidden docked full-width bottom-0 rounded-t-none border-t border-[#E2E8F0] dark:border-slate-800 shadow-[0_-1px_3px_0_rgba(0,0,0,0.02)] bg-white dark:bg-slate-900 fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 pb-safe">
<a class="flex flex-col items-center justify-center text-[#0F172A] dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1 transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-['Public_Sans'] text-xs font-medium mt-1">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 hover:text-[#0F172A] dark:hover:text-white transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-['Public_Sans'] text-xs font-medium mt-1">Reports</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 hover:text-[#0F172A] dark:hover:text-white transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
<span class="font-['Public_Sans'] text-xs font-medium mt-1">Wallets</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1 hover:text-[#0F172A] dark:hover:text-white transition-all duration-200 ease-in-out active:scale-95" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-['Public_Sans'] text-xs font-medium mt-1">Settings</span>
</a>
</nav>
</body></html>


no need for lock wallet and review transaction button that thing is not needed
same as previous last transacti9on and budget health 

next is report page:

<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Financial Reports</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-container": "#f0edef",
                      "on-surface": "#1b1b1d",
                      "error": "#ba1a1a",
                      "tertiary-container": "#271901",
                      "error-container": "#ffdad6",
                      "on-tertiary-container": "#98805d",
                      "primary-container": "#131b2e",
                      "on-error": "#ffffff",
                      "surface-tint": "#565e74",
                      "surface-container-lowest": "#ffffff",
                      "on-tertiary": "#ffffff",
                      "on-error-container": "#93000a",
                      "surface": "#fcf8fa",
                      "surface-container-low": "#f6f3f5",
                      "surface-container-highest": "#e4e2e4",
                      "on-tertiary-fixed-variant": "#574425",
                      "secondary-fixed-dim": "#b7c8e1",
                      "primary": "#000000",
                      "surface-bright": "#fcf8fa",
                      "on-surface-variant": "#45464d",
                      "on-primary": "#ffffff",
                      "on-primary-container": "#7c839b",
                      "on-primary-fixed": "#131b2e",
                      "background": "#fcf8fa",
                      "on-tertiary-fixed": "#271901",
                      "on-secondary-fixed": "#0b1c30",
                      "inverse-on-surface": "#f3f0f2",
                      "on-background": "#1b1b1d",
                      "surface-container-high": "#eae7e9",
                      "secondary": "#505f76",
                      "secondary-fixed": "#d3e4fe",
                      "surface-variant": "#e4e2e4",
                      "on-secondary-container": "#54647a",
                      "tertiary-fixed": "#fcdeb5",
                      "surface-dim": "#dcd9db",
                      "outline": "#76777d",
                      "secondary-container": "#d0e1fb",
                      "inverse-surface": "#303032",
                      "primary-fixed": "#dae2fd",
                      "inverse-primary": "#bec6e0",
                      "tertiary-fixed-dim": "#dec29a",
                      "primary-fixed-dim": "#bec6e0",
                      "outline-variant": "#c6c6cd",
                      "on-secondary-fixed-variant": "#38485d",
                      "tertiary": "#000000",
                      "on-secondary": "#ffffff",
                      "on-primary-fixed-variant": "#3f465c"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "container-max": "1280px",
                      "xl": "40px",
                      "sm": "8px",
                      "md": "16px",
                      "base": "8px",
                      "xs": "4px",
                      "lg": "24px",
                      "gutter": "24px"
              },
              "fontFamily": {
                      "label-sm": [
                              "Public Sans"
                      ],
                      "body-lg": [
                              "Public Sans"
                      ],
                      "headline-md": [
                              "Public Sans"
                      ],
                      "body-md": [
                              "Public Sans"
                      ],
                      "label-md": [
                              "Public Sans"
                      ],
                      "display-sm": [
                              "Public Sans"
                      ],
                      "numeric-data": [
                              "Public Sans"
                      ],
                      "display-lg": [
                              "Public Sans"
                      ]
              },
              "fontSize": {
                      "label-sm": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "letterSpacing": "0.02em",
                                      "fontWeight": "500"
                              }
                      ],
                      "body-lg": [
                              "18px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "400"
                              }
                      ],
                      "headline-md": [
                              "24px",
                              {
                                      "lineHeight": "32px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-md": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "400"
                              }
                      ],
                      "label-md": [
                              "14px",
                              {
                                      "lineHeight": "20px",
                                      "letterSpacing": "0.01em",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-sm": [
                              "30px",
                              {
                                      "lineHeight": "36px",
                                      "letterSpacing": "-0.01em",
                                      "fontWeight": "700"
                              }
                      ],
                      "numeric-data": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "600"
                              }
                      ],
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "56px",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "700"
                              }
                      ]
              }
            },
          }
        }
      </script>
<style>
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined[data-weight="fill"] {
            font-variation-settings: 'FILL' 1;
        }
      </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-background font-body-md min-h-screen pb-24 md:pb-8">
<!-- TopAppBar -->
<header class="bg-[#F8FAFC] dark:bg-slate-950 font-['Public_Sans'] antialiased docked full-width top-0 border-b border-b border-slate-200 dark:border-slate-800 flat no shadows">
<div class="flex justify-between items-center w-full px-4 h-16 max-w-[1280px] mx-auto">
<div class="flex items-center gap-md">
<button class="text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-all p-sm rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-[24px]">menu</span>
</button>
<h1 class="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Monthly Report</h1>
</div>
<div class="flex items-center gap-md hidden md:flex">
<nav class="flex gap-4">
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-all px-3 py-2 rounded-lg font-label-md text-label-md" href="#">Dashboard</a>
<a class="text-slate-900 dark:text-white font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-all px-3 py-2 rounded-lg font-label-md text-label-md" href="#">Reports</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-all px-3 py-2 rounded-lg font-label-md text-label-md" href="#">Budgets</a>
<a class="text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:opacity-80 transition-all px-3 py-2 rounded-lg font-label-md text-label-md" href="#">Settings</a>
</nav>
</div>
<button class="w-10 h-10 rounded-full overflow-hidden border border-outline-variant active:opacity-80 transition-all">
<img alt="User profile photo" class="w-full h-full object-cover" data-alt="professional headshot of a person wearing a business casual outfit with a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ONo7idAPis02sjU_Xc-GFtuDq75XJ1QqtcdsdtNKmOU8qbj7JUKkBi_xulexiumPW15ac86T9dqViOccPEedn1Kw4EKDO1WyAoFx48mBB4ji4gfJJf7V-mmp9Xh3uucQGQf677bMbsKeZbteQIly_VFVR7t8kAxeXDdsl6dZt-GuTAXhTWQ6ICGrutSg-olwoFaThzZtCwmi6ZgKlWh-RXJr0NY-OO4lnCCE0HWgdmNKeMZ9mSnWH1SCbRs3PmHmndedWARqEg"/>
</button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="max-w-container-max mx-auto px-4 md:px-gutter py-xl">
<div class="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h2 class="font-display-lg text-display-lg text-on-surface mb-sm">Financial Reports</h2>
<p class="font-body-md text-body-md text-on-surface-variant">Review your monthly summaries and detailed transaction breakdowns.</p>
</div>
<div class="flex gap-sm">
<button class="bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low px-md py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs transition-colors">
<span class="material-symbols-outlined text-[18px]">filter_list</span>
                    Filter
                </button>
<button class="bg-primary text-on-primary hover:bg-primary/90 px-md py-sm rounded-lg font-label-md text-label-md flex items-center gap-xs transition-colors shadow-sm">
<span class="material-symbols-outlined text-[18px]">download</span>
                    Export
                </button>
</div>
</div>
<!-- Monthly Summaries Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Card: October 2023 -->
<a class="block bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-200 group" href="#">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm">
<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">October 2023</h3>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<div class="mb-lg">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$12,450.00</p>
</div>
<div class="space-y-sm mb-lg">
<div class="flex justify-between items-end">
<p class="font-label-sm text-label-sm text-on-surface-variant">Expense / Budget</p>
<div class="text-right">
<span class="font-numeric-data text-numeric-data text-on-surface">$4,120.00</span>
<span class="font-label-sm text-label-sm text-outline mx-1">/</span>
<span class="font-numeric-data text-numeric-data text-outline">$5,000.00</span>
</div>
</div>
<!-- Limit Bar -->
<div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div class="bg-primary h-2 rounded-full" style="width: 82%"></div>
</div>
</div>
<div class="flex justify-between items-center bg-surface-container-low p-md rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant">Remaining Balance</span>
<span class="font-numeric-data text-numeric-data text-on-surface text-[#006874] bg-[#006874]/10 px-2 py-1 rounded">+$880.00</span>
</div>
</a>
<!-- Card: September 2023 -->
<a class="block bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-200 group" href="#">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm">
<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">September 2023</h3>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<div class="mb-lg">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$11,570.00</p>
</div>
<div class="space-y-sm mb-lg">
<div class="flex justify-between items-end">
<p class="font-label-sm text-label-sm text-on-surface-variant">Expense / Budget</p>
<div class="text-right">
<span class="font-numeric-data text-numeric-data text-error">$5,240.00</span>
<span class="font-label-sm text-label-sm text-outline mx-1">/</span>
<span class="font-numeric-data text-numeric-data text-outline">$5,000.00</span>
</div>
</div>
<!-- Limit Bar Over Budget -->
<div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div class="bg-error h-2 rounded-full" style="width: 100%"></div>
</div>
</div>
<div class="flex justify-between items-center bg-error-container/30 p-md rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant">Remaining Balance</span>
<span class="font-numeric-data text-numeric-data text-error bg-error/10 px-2 py-1 rounded">-$240.00</span>
</div>
</a>
<!-- Card: August 2023 -->
<a class="block bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-200 group" href="#">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm">
<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">August 2023</h3>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<div class="mb-lg">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$11,810.00</p>
</div>
<div class="space-y-sm mb-lg">
<div class="flex justify-between items-end">
<p class="font-label-sm text-label-sm text-on-surface-variant">Expense / Budget</p>
<div class="text-right">
<span class="font-numeric-data text-numeric-data text-on-surface">$3,650.00</span>
<span class="font-label-sm text-label-sm text-outline mx-1">/</span>
<span class="font-numeric-data text-numeric-data text-outline">$5,000.00</span>
</div>
</div>
<!-- Limit Bar -->
<div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div class="bg-primary h-2 rounded-full" style="width: 73%"></div>
</div>
</div>
<div class="flex justify-between items-center bg-surface-container-low p-md rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant">Remaining Balance</span>
<span class="font-numeric-data text-numeric-data text-on-surface text-[#006874] bg-[#006874]/10 px-2 py-1 rounded">+$1,350.00</span>
</div>
</a>
<!-- Card: July 2023 -->
<a class="block bg-surface-container-lowest border border-outline-variant rounded-xl p-lg shadow-[0_2px_4px_0_rgba(0,0,0,0.02)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-200 group" href="#">
<div class="flex justify-between items-center mb-md border-b border-outline-variant/30 pb-sm">
<h3 class="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">July 2023</h3>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
</div>
<div class="mb-lg">
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">Total Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$10,460.00</p>
</div>
<div class="space-y-sm mb-lg">
<div class="flex justify-between items-end">
<p class="font-label-sm text-label-sm text-on-surface-variant">Expense / Budget</p>
<div class="text-right">
<span class="font-numeric-data text-numeric-data text-on-surface">$4,890.00</span>
<span class="font-label-sm text-label-sm text-outline mx-1">/</span>
<span class="font-numeric-data text-numeric-data text-outline">$5,000.00</span>
</div>
</div>
<!-- Limit Bar -->
<div class="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div class="bg-primary h-2 rounded-full" style="width: 97%"></div>
</div>
</div>
<div class="flex justify-between items-center bg-surface-container-low p-md rounded-lg">
<span class="font-label-md text-label-md text-on-surface-variant">Remaining Balance</span>
<span class="font-numeric-data text-numeric-data text-on-surface text-[#006874] bg-[#006874]/10 px-2 py-1 rounded">+$110.00</span>
</div>
</a>
</div>
</main>
<!-- BottomNavBar Mobile -->
<nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white dark:bg-slate-900 font-['Public_Sans'] text-xs font-medium border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 hover:text-slate-700 dark:hover:text-slate-200 active:scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined mb-1">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg py-1 px-3 hover:text-slate-700 dark:hover:text-slate-200 active:scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined mb-1" data-weight="fill">insert_chart</span>
<span>Reports</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 hover:text-slate-700 dark:hover:text-slate-200 active:scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined mb-1">account_balance_wallet</span>
<span>Budgets</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 hover:text-slate-700 dark:hover:text-slate-200 active:scale-95 transition-transform duration-150" href="#">
<span class="material-symbols-outlined mb-1">settings</span>
<span>Settings</span>
</a>
</nav>
</body></html>

report of each moth transaction need to show like
single box for each month with month name
total balance, what is the total set budget of the month, total expense of the month
balance of the month 
if user click the box it will show the entier month transaction 
based on our core logic if that month expense moretham 50% that month box boreder and and that line need to show in yellow color if morethan 80% need to show in red color 

next is wallet page:

<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Wallets Management - Financial Clarity</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-container-lowest": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-container-low": "#f6f3f5",
                        "secondary": "#505f76",
                        "on-tertiary-fixed-variant": "#574425",
                        "on-secondary-fixed-variant": "#38485d",
                        "on-primary-fixed-variant": "#3f465c",
                        "surface-container": "#f0edef",
                        "inverse-on-surface": "#f3f0f2",
                        "on-background": "#1b1b1d",
                        "error-container": "#ffdad6",
                        "on-tertiary": "#ffffff",
                        "surface-container-high": "#eae7e9",
                        "tertiary": "#000000",
                        "outline": "#76777d",
                        "on-secondary-fixed": "#0b1c30",
                        "tertiary-fixed-dim": "#dec29a",
                        "secondary-fixed-dim": "#b7c8e1",
                        "on-error-container": "#93000a",
                        "surface-tint": "#565e74",
                        "primary-fixed-dim": "#bec6e0",
                        "secondary-fixed": "#d3e4fe",
                        "background": "#fcf8fa",
                        "secondary-container": "#d0e1fb",
                        "on-error": "#ffffff",
                        "on-tertiary-container": "#98805d",
                        "on-primary-container": "#7c839b",
                        "on-secondary": "#ffffff",
                        "on-primary-fixed": "#131b2e",
                        "primary-container": "#131b2e",
                        "inverse-surface": "#303032",
                        "on-secondary-container": "#54647a",
                        "surface-variant": "#e4e2e4",
                        "surface-container-highest": "#e4e2e4",
                        "on-surface-variant": "#45464d",
                        "inverse-primary": "#bec6e0",
                        "surface": "#fcf8fa",
                        "surface-bright": "#fcf8fa",
                        "primary": "#000000",
                        "primary-fixed": "#dae2fd",
                        "error": "#ba1a1a",
                        "tertiary-fixed": "#fcdeb5",
                        "on-surface": "#1b1b1d",
                        "outline-variant": "#c6c6cd",
                        "on-tertiary-fixed": "#271901",
                        "surface-dim": "#dcd9db",
                        "tertiary-container": "#271901"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "md": "16px",
                        "lg": "24px",
                        "xs": "4px",
                        "gutter": "24px",
                        "container-max": "1280px",
                        "base": "8px",
                        "xl": "40px",
                        "sm": "8px"
                    },
                    "fontFamily": {
                        "label-md": ["Public Sans"],
                        "display-lg": ["Public Sans"],
                        "body-md": ["Public Sans"],
                        "body-lg": ["Public Sans"],
                        "label-sm": ["Public Sans"],
                        "display-sm": ["Public Sans"],
                        "numeric-data": ["Public Sans"],
                        "headline-md": ["Public Sans"]
                    },
                    "fontSize": {
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "500"}],
                        "display-sm": ["30px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "numeric-data": ["16px", {"lineHeight": "24px", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Public Sans', sans-serif;
            background-color: #F8FAFC;
        }
        .financial-card {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
            border: 1px solid #E2E8F0;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface">
<!-- TopAppBar -->
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm sticky top-0 z-40">
<div class="flex items-center justify-between px-6 h-16 w-full max-w-[1280px] mx-auto">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-900 dark:text-slate-100" data-icon="account_balance_wallet">account_balance_wallet</span>
<h1 class="font-['Public_Sans'] font-semibold text-lg text-slate-900 dark:text-slate-100">Wallets</h1>
</div>
<div class="flex items-center gap-4">
<button class="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-all duration-200">
<span class="material-symbols-outlined" data-icon="search">search</span>
</button>
<button class="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-all duration-200">
<span class="material-symbols-outlined" data-icon="add">add</span>
</button>
</div>
</div>
</header>
<main class="max-w-[1280px] mx-auto px-6 py-8 pb-24">
<!-- Bento Grid Layout -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Wallets Section (Main Canvas) -->
<div class="md:col-span-8 space-y-gutter">
<div class="flex items-center justify-between">
<h2 class="text-headline-md font-headline-md text-on-background">Your Accounts</h2>
<span class="text-label-sm font-label-sm text-secondary">3 active wallets</span>
</div>
<div class="grid grid-cols-1 gap-md">
<!-- HDFC Bank Card -->
<div class="financial-card bg-surface-container-lowest p-lg rounded-xl flex flex-col gap-md">
<div class="flex justify-between items-start">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">HDFC Bank</p>
<p class="font-label-sm text-label-sm text-secondary">**** 1234</p>
</div>
</div>
<div class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-label-sm font-label-sm">
                                SAFE
                            </div>
</div>
<div>
<p class="font-label-sm text-label-sm text-secondary">Available Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$4,200.00</p>
</div>
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-secondary">Monthly Budget: $5,000.00</span>
<span class="text-on-surface">16% Used</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-green-500 h-full w-[16%]"></div>
</div>
</div>
</div>
<!-- ICICI Bank Card -->
<div class="financial-card bg-surface-container-lowest p-lg rounded-xl flex flex-col gap-md border-l-4 border-l-yellow-500">
<div class="flex justify-between items-start">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">ICICI Bank</p>
<p class="font-label-sm text-label-sm text-secondary">**** 5678</p>
</div>
</div>
<div class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-label-sm font-label-sm">
                                51% USED
                            </div>
</div>
<div>
<p class="font-label-sm text-label-sm text-secondary">Available Balance</p>
<p class="font-display-sm text-display-sm text-on-surface">$2,450.00</p>
</div>
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-secondary">Monthly Budget: $5,000.00</span>
<span class="text-on-surface">51% Used</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-yellow-500 h-full w-[51%]"></div>
</div>
<p class="text-label-sm font-label-sm text-yellow-700 mt-1">You've used over 50% of your limit</p>
</div>
</div>
<!-- SBI Bank Card -->
<div class="financial-card bg-surface-container-lowest p-lg rounded-xl flex flex-col gap-md border-l-4 border-l-error">
<div class="flex justify-between items-start">
<div class="flex items-center gap-md">
<div class="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">SBI Bank</p>
<p class="font-label-sm text-label-sm text-secondary">**** 9012</p>
</div>
</div>
<div class="bg-error-container text-on-error-container px-3 py-1 rounded-full text-label-sm font-label-sm">
                                80% USED
                            </div>
</div>
<div>
<p class="font-label-sm text-label-sm text-secondary">Available Balance</p>
<p class="font-display-sm text-display-sm text-error">$950.00</p>
</div>
<div class="space-y-xs">
<div class="flex justify-between text-label-sm font-label-sm">
<span class="text-secondary">Monthly Budget: $5,000.00</span>
<span class="text-error font-bold">81% Used</span>
</div>
<div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div class="bg-error h-full w-[81%]"></div>
</div>
<p class="text-label-sm font-label-sm text-error font-bold mt-1">CRITICAL: You have exceeded 80% of your limit!</p>
</div>
</div>
</div>
</div>
<!-- Sidebar Context -->
<div class="md:col-span-4 space-y-gutter">
<!-- Smart Savings Promo Card -->
<div class="relative overflow-hidden rounded-xl bg-primary-container text-on-primary p-lg shadow-xl min-h-[200px] flex flex-col justify-end">
<div class="absolute top-0 right-0 p-4 opacity-20">
<span class="material-symbols-outlined text-[80px]" data-icon="savings">savings</span>
</div>
<div class="relative z-10">
<h3 class="font-headline-md text-headline-md mb-2">Smart Savings</h3>
<p class="font-body-md text-body-md text-on-primary-container mb-4">You could save $450 this month by optimizing your SBI account usage.</p>
<button class="bg-surface-container-lowest text-primary-container px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all">
                            Review Tips
                        </button>
</div>
<div class="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none"></div>
</div>
<!-- Recent Activity Section -->
<div class="bg-surface-container-lowest rounded-xl p-lg financial-card">
<div class="flex items-center justify-between mb-md">
<h3 class="font-label-md text-label-md text-on-surface uppercase tracking-wider">Recent Activity</h3>
<span class="material-symbols-outlined text-secondary" data-icon="history">history</span>
</div>
<div class="divide-y divide-slate-100">
<div class="py-md flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm" data-icon="shopping_cart">shopping_cart</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Amazon India</p>
<p class="font-label-sm text-label-sm text-secondary">SBI Bank • Today</p>
</div>
</div>
<p class="font-numeric-data text-numeric-data text-error">-$45.20</p>
</div>
<div class="py-md flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm" data-icon="restaurant">restaurant</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Starbucks</p>
<p class="font-label-sm text-label-sm text-secondary">HDFC Bank • Yesterday</p>
</div>
</div>
<p class="font-numeric-data text-numeric-data text-error">-$12.40</p>
</div>
<div class="py-md flex items-center justify-between">
<div class="flex items-center gap-md">
<div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
<span class="material-symbols-outlined text-green-600 text-sm" data-icon="payments">payments</span>
</div>
<div>
<p class="font-label-md text-label-md text-on-surface">Salary Deposit</p>
<p class="font-label-sm text-label-sm text-secondary">ICICI Bank • 2 days ago</p>
</div>
</div>
<p class="font-numeric-data text-numeric-data text-green-600">+$3,200.00</p>
</div>
</div>
<button class="w-full mt-4 py-2 text-primary font-label-md text-label-md hover:underline decoration-2 underline-offset-4">
                        View All Transactions
                    </button>
</div>
<!-- Insights Card -->
<div class="bg-white rounded-xl p-lg financial-card border-dashed border-2 border-slate-200 flex flex-col items-center justify-center py-10 text-center">
<span class="material-symbols-outlined text-slate-300 text-4xl mb-2" data-icon="add_circle">add_circle</span>
<p class="font-label-md text-label-md text-on-surface">Add New Bank Account</p>
<p class="font-label-sm text-label-sm text-secondary">Connect securely via Plaid</p>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_0_rgba(0,0,0,0.02)]">
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 transition-transform duration-200 active:scale-95 hover:text-slate-700 dark:hover:text-slate-200" href="#">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-['Public_Sans'] text-[12px] font-medium">Dashboard</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 transition-transform duration-200 active:scale-95 hover:text-slate-700 dark:hover:text-slate-200" href="#">
<span class="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
<span class="font-['Public_Sans'] text-[12px] font-medium">Reports</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-lg py-1 px-3 transition-transform duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="account_balance_wallet" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
<span class="font-['Public_Sans'] text-[12px] font-medium font-bold">Wallets</span>
</a>
<a class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-1 px-3 transition-transform duration-200 active:scale-95 hover:text-slate-700 dark:hover:text-slate-200" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-['Public_Sans'] text-[12px] font-medium">Settings</span>
</a>
</nav>
</body></html>

user can add their another account in wallet in first what user enter while the beging it will need to show in wallet if user enter the account number that last 4 digit need to show if not account number if they enter the last 4 digit og the acc no that need to show

if user click other account need to load that account 

dont combine all account with same budget 

if user newly add the wallet and choose it need ti ask the balane and limit

for each new month start if user login open the application ask need to select the wallet and need to enter the total balance and budget limit  

i hope you understand what i want

i have already set the supabase i created a table use that table

-- 1. Wallets Table
CREATE TABLE wallets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    bank_name TEXT NOT NULL,
    account_last_four VARCHAR(4) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Monthly Budgets Table (Tied to a specific wallet and month)
CREATE TABLE monthly_budgets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    wallet_id UUID REFERENCES wallets(id) ON DELETE CASCADE,
    month INTEGER NOT NULL, -- e.g., 4 for April
    year INTEGER NOT NULL, -- e.g., 2026
    starting_balance DECIMAL(12,2) NOT NULL,
    monthly_limit DECIMAL(12,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(wallet_id, month, year) -- Ensures only one budget per wallet per month
);

-- 3. Transactions Table
CREATE TABLE transactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    budget_id UUID REFERENCES monthly_budgets(id) ON DELETE CASCADE,
    main_category TEXT NOT NULL,
    sub_category TEXT NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    note TEXT,
    transaction_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);


this is the table

i already create the file with angular with scss style

i already create three component 
home page 
monthely report and 
wallet use these component to write the clean structure and production level code 

from supabase use email sign in for secur personal person date 

i hope you understand what i want

if waant to create a service file create a service file for logicall thing 