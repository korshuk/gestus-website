$(function () {
    const MENU_BG_TEXT = 'GESTUS';
    const MAIN_MENU_OPENED_CLASS = 'main-menu-opened';
    const PORTFOLIO_MENU_OPENED_CLASS = 'portfolio-menu-opened';
    const PORTFOLIO_MENU_OPENED_FROM_START_CLASS = 'portfolio-menu-opened-from-start';
    const $indexMenu = $('#indexMenu');
    const $indexMenuList = $('.index-menu-list');

    const $mainMenu = $('#mainMenu');
    const $mainMenuContainer = $('.main-menu-nav'); // $('#mainMenuContainer');
    const $mainMenuItems = $('.main-menu-list-item');
    const $mainMenuBgScene = $('#mainMenuBgScene');
    let indexMenuIsAnimating = false;

    const $window = $(window);
    const $document = $(document);
    const $body = $('body');
    const $searchBlock = $('#searchBlock');
    const $searchInput = $('#searchInput');
    const $personHeader = $('.person-header');

    const $projectGallery = $('#projectGallery');
    const $projectsMenu = $('#projectsMenu');
    const $variettaGallery = $('#variettaGallery');

    const $backButton = $('#backButton');
    const $mainHeaderNav = $('#mainHeaderNav')
    const $scrollWrapper = $('.scrollbar-wrapper');

    const $projectsPhotoList = $('#projectsPhotoList');
    const $projectsNameList = $('#projectsNameList');
    const $projectsPhotoListItems = $('.projects-photo_list-item');
    const $portfolioMenuTogglerImg = $('#portfolioMenuTogglerImg');
    const projectsPhotoListLength = $projectsPhotoListItems.length;
    let projectsCurrentSlide = 0;
    let projectsIsAnimating = false;

    const $header = $('.header');

    let isIndexMenuScrollable = false;
    let isMainMenuSrollable = false;

    let windoWidth;
    let windoHeight;
    $window.on('resize', onWindowResize);

    $document.on('mousewheel', '.index-menu-container', onIndexMenuScroll);
    $document.on('mousewheel', '.main-menu', onMainMenuScroll);
    $document.on('mousewheel', '.agibalov-portfolio-menu', onPortfolioMenuScroll);

    $document.on('mouseenter', '.index-menu-list-item-link', onIndexMenuListItemLinkHover);
    $document.on('mouseleave', '.index-menu-list-item-link', onIndexMenuListItemLinkHoverOut);

    $document.on('click', '.nav-menu-btn', navMenuBtnClick);
    $document.on('click', '.search-toggle-btn', toggleSearchBlock);
    // $document.on('click', '.portfolio-menu_toggler-btn', togglePortfolioMenu);
    $(".portfolio-menu_toggler-btn").swipe(togglePortfolioMenu);
    $(".projects-list-container").swipe(togglePortfolioMenu);



    $document.on('click', '.btn-back', onBackBtnClick)

    onWindowResize();
    init();


    function init() {
        new Parallax($mainMenuBgScene[0]);

        if ($scrollWrapper.length > 0) {
            SimpleScrollbar.initEl($scrollWrapper.get(0));
            $('.ss-content').on('scroll', pageScroll)
        }

        if ($personHeader.length > 0) {
            $personHeader.bgLoaded({
                afterLoaded: function () {
                    $body.addClass('is-loaded')
                }
            });
        } else {
            $body.addClass('is-loaded')
        }

        if ($projectGallery.length > 0) {
            $('.project-gallery_img-link').simpleLightbox({
                /* options */ });
        }
        if ($variettaGallery.length > 0) {
            $('.varietta-page_gallery-link').simpleLightbox({
                /* options */ });
        }

        /* $indexMenuList.each(function (i, element) {
             $(element).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
                 setTimeout(function () {
                     indexMenuIsAnimating = false;
                     console.log('@@@@@@@@')
                 }, 300);
             })
         })*/

    }

    function togglePortfolioMenu(direction) {

        if ($body.hasClass(PORTFOLIO_MENU_OPENED_FROM_START_CLASS)) {
            return;
        }
        if (direction === 'left' && !$body.hasClass(PORTFOLIO_MENU_OPENED_CLASS)) {
            $body.addClass(PORTFOLIO_MENU_OPENED_CLASS)
        }
        if (direction === 'right' && $body.hasClass(PORTFOLIO_MENU_OPENED_CLASS)) {
            $body.removeClass(PORTFOLIO_MENU_OPENED_CLASS)
        }


    }

    function onBackBtnClick(e) {
        e.preventDefault();
        if ($body.hasClass(PORTFOLIO_MENU_OPENED_CLASS) && !$body.hasClass(PORTFOLIO_MENU_OPENED_FROM_START_CLASS)) {

            togglePortfolioMenu('right')
        } else {
            window.history.back()
        }
    }

    function pageScroll(e) {
        const scrollTop = $('.ss-content').scrollTop();

        if (scrollTop > 50) {
            $header.addClass('on-scroll')
        } else {
            $header.removeClass('on-scroll')
        }
        if ($personHeader.length > 0) {
            if (scrollTop < 350) {
                $mainHeaderNav.css({
                    'margin-right': ((360 - 440) * scrollTop) / 350 + 440 + 'px'
                })
            } else if (scrollTop < 500) {
                $mainHeaderNav.css({
                    'margin-right': (-(13 + 360) * scrollTop) / 150 + 1230 + 'px'
                })
            }
        }
        if ($projectGallery.length > 0) {
            if (scrollTop < 710) {
                $projectsMenu.css({
                    top: 260 + scrollTop + 'px'
                });
            }
        }

        if ($body.hasClass('agibalov-intro-page')) {
            if (scrollTop > 600) {
                $header.addClass('header-scrolled')
            } else {
                $header.removeClass('header-scrolled')
            }

        }

    }

    function onWindowResize(e) {
        windoWidth = $window.width();
        windoHeight = $window.height();

        isIndexMenuScrollable = ($indexMenu.width() - windoWidth > 100) || false;
        calculateMainMenuHeight();
        isMainMenuSrollable = $mainMenuContainer.maxShift < 0 || false;

        if (isIndexMenuScrollable) {
            $indexMenuList.each(function (i, element) {
                const elementWidth = $(element).outerWidth() - 50;
                const deltaWidth = (elementWidth - windoWidth);
                element.maxShift = deltaWidth;
                element.speed = Math.abs(deltaWidth / 500) * (i % 2 !== 0 ? 1 : -1)
            })
            $body.addClass('index-page-is-scrollable')
        } else {
            $body.removeClass('index-page-is-scrollable')
        }

        if (isMainMenuSrollable) {
            $mainMenu.addClass('main-menu-is-scrollable');
        } else {
            $mainMenu.removeClass('main-menu-is-scrollable');
        }

        $indexMenuList.each(function (i, element) {
            element.shift = 0;
            $(element).css('margin-left', `${element.shift}px`);
        })
    }

    function calculateMainMenuHeight() {
        let maxTop = 0;
        let minTop = 10000;
        let $lastElement;
        let $subMenuItems;
        let subMenuItemHeight = 0;
        let maxShift;
        $mainMenuItems.each((i, element) => {
            const top = $(element).offset().top;
            if (top > maxTop) {
                maxTop = top;
                $lastElement = $(element)
            }
            if (top < minTop) {
                minTop = top;
            }
        })
        $subMenuItems = $lastElement.find('.main-menu-sub-list-item');
        subMenuItemHeight = $subMenuItems.height();
        maxTop = maxTop + $lastElement.height() + $subMenuItems.length * subMenuItemHeight + 60;

        maxShift = maxTop - $mainMenu.height();
        if (maxShift < 0) {
            $mainMenuContainer.maxShift = 0
        } else {
            $mainMenuContainer.maxShift = -1 * maxShift;
        }
    }

    function onPortfolioMenuScroll(e) {

        let $currentSlideImg;
        if (projectsIsAnimating) {
            return;
        }

        var direction = -1 * e.originalEvent.deltaY;

        if (direction < 0) {
            if (projectsCurrentSlide + 1 >= projectsPhotoListLength) {
                return;
            }
            projectsCurrentSlide++;
        } else {
            if (projectsCurrentSlide - 1 < 0) {
                return;
            }
            //if (!topIsReached($currentSlide)) return;
            projectsCurrentSlide--;
        }

        projectsIsAnimating = true;
        const projectsCurrentName = projectsPhotoListLength - 1 - projectsCurrentSlide;

        $currentSlideImg = $('.projects-photo_img').get(projectsCurrentSlide);
        $currentSlideImg = $($currentSlideImg);

        $portfolioMenuTogglerImg.attr('src', $currentSlideImg.attr('src'));
        if ($currentSlideImg.hasClass('projects-photo_img-landscape')) {
            $portfolioMenuTogglerImg.parent().addClass('portfolio-menu_toggler-btn_landscape')
        } else {
            $portfolioMenuTogglerImg.parent().removeClass('portfolio-menu_toggler-btn_landscape')
        }

        $projectsPhotoList.css({
            'transform': "translate3d(0, " + -projectsCurrentSlide * 100 + "%, 0)"
        });
        $projectsNameList.css({
            'transform': "translate3d(0, " + -projectsCurrentName * 100 + "%, 0)"
        });

        $projectsPhotoList.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
            setTimeout(function () {
                projectsIsAnimating = false;
            }, 300);
        })
    }

    function onMainMenuScroll(e) {
        if (!isMainMenuSrollable) {
            return
        }
        let deltaY = -1 * e.originalEvent.deltaY;

        if (deltaY !== 0) {
            const newShift = ($mainMenuContainer.shift || 0) + deltaY * 0.5;

            if (newShift >= 0) {
                $mainMenuContainer.shift = 0;
            }
            if (newShift <= $mainMenuContainer.maxShift) {
                $mainMenuContainer.shift = $mainMenuContainer.maxShift;
            }
            if (newShift < 0 && newShift > $mainMenuContainer.maxShift) {
                $mainMenuContainer.shift = newShift;
            }
            $mainMenuContainer.css('margin-top', `${$mainMenuContainer.shift}px`);
        }
    }

    function onIndexMenuScroll(e) {
        if (!isIndexMenuScrollable) {
            return
        }
        if (indexMenuIsAnimating) {
            return;
        }

        let deltaX = e.originalEvent.deltaX;

        if (e.originalEvent.deltaY !== 0 && Math.abs(e.originalEvent.deltaY) > Math.abs(e.originalEvent.deltaX)) {
            deltaX = e.originalEvent.deltaY
        }


        direction = deltaX / Math.abs(deltaX);
        indexMenuIsAnimating = true;


        $indexMenuList.each(function (i, element) {
            const $element = $(element);
            const sign = i === 1 ? -1 : 1;
            //const newShift = (element.shift || 0) + deltaX * element.speed;
            /* $element.css({
                 'transform': "translate3d(" + direction * element.maxShift + "px, 0, 0)"
             })*/
            $element.css('margin-left', `${sign * direction * element.maxShift}px`);
        })
        setTimeout(function () {
            indexMenuIsAnimating = false;
        }, 2000);

        /*if (direction < 0) {
            if (projectsCurrentSlide + 1 >= projectsPhotoListLength) {
                return;
            }
            projectsCurrentSlide++;
        } else {
            if (projectsCurrentSlide - 1 < 0) {
                return;
            }
            //if (!topIsReached($currentSlide)) return;
            projectsCurrentSlide--;
        }*/

        /*let deltaX = e.originalEvent.deltaX;

        if (e.originalEvent.deltaY !== 0 && Math.abs(e.originalEvent.deltaY) > Math.abs(e.originalEvent.deltaX)) {
            deltaX = e.originalEvent.deltaY
        }

        if (deltaX !== 0) {
            $indexMenuList.each(function (i, element) {
                const $element = $(element);
                const newShift = (element.shift || 0) + deltaX * element.speed;

                if (Math.abs(newShift) <= element.maxShift) {
                    element.shift = newShift
                } else {
                    element.shift = element.shift
                }

                $element.css('margin-left', `${element.shift}px`);
            })
        }*/
    }

    function onIndexMenuListItemLinkHover(e) {
        const $target = $(e.currentTarget);
        const targetImage = $target.data('index-link-image');

        if (targetImage) {
            $target.addClass('index-menu-link_hover');
            $(`#${targetImage}`).addClass('index-menu-list-item-link-image_visible')
        }

    }

    function onIndexMenuListItemLinkHoverOut(e) {
        $('.index-menu-link_hover').removeClass('index-menu-link_hover');
        $('.index-menu-list-item-link-image_visible').removeClass('index-menu-list-item-link-image_visible');
    }

    function navMenuBtnClick(e) {
        e.preventDefault();
        $(e.currentTarget).toggleClass('nav-menu-btn-active');
        $body.toggleClass(MAIN_MENU_OPENED_CLASS)
    }

    function toggleSearchBlock(e) {
        e.preventDefault();
        $searchBlock.toggleClass('search-block-active');
        if ($searchBlock.hasClass('search-block-active')) {
            setTimeout(function () {
                $searchInput.focus();
            }, 800)

        }

    }

})