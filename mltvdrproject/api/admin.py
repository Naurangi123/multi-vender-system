from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(ProductImage)
admin.site.register(ProductVariant)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Coupon)
admin.site.register(Order)
admin.site.register(OrderItem)

@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = ('id', 'store_name', 'user', 'wallet_balance', 'rating')
    search_fields = ('store_name',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'vendor', 'price', 'stock', 'category')
    search_fields = ('name',)