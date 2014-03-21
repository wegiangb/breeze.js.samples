﻿(function(angular) {
    'use strict';

    angular.module( "app" )
           .controller( 'orderSidebarController', orderSidebarController );

        // **************************************
        // Annotated construction function
        // **************************************

        function orderSidebarController( $scope, routes, dataservice )
        {
            var vm = $scope.vm || this;

            vm.products     = routes.sidebar.map( deselect );
            vm.cartOrder    = dataservice.cartOrder;
            vm.draftOrder   = dataservice.draftOrder;
        };


        // **************************************
        // Private Methods
        // **************************************


        /**
         *  Inject a `selected` value == false at startup
         * @param item
         * @returns {*}
         */
        function deselect( item )
        {
            item.selected = false;
            return item;
        }

        /**
         * Accessor to clear all link selections and
         * highlight the user-selected item
         */
        function selectItem( selectedItem )
        {
            vm.links.forEach( function(item){
                item.selected = ( item === selectedItem );
            })
        }


}( this.angular ));

