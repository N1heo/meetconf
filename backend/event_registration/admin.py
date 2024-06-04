import csv
import datetime

from django.contrib import admin
from django.http import HttpResponse

from .models import ConfUser, Role, Conference


def export_to_csv(modeladmin, request, queryset):
    """
        A function to export a queryset to a csv file.
    """
    opts = modeladmin.model._meta
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment;' 'filename={}.csv'.format(opts.verbose_name)
    writer = csv.writer(response)
    fields = [field for field in opts.get_fields() if not field.many_to_many and not field.one_to_many]
    # Write a first row with header information
    writer.writerow([field.verbose_name for field in fields] + ['conferences'])
    # Write data rows
    for obj in queryset:
        data_row = []
        for field in fields:
            value = getattr(obj, field.name)
            if isinstance(value, datetime.datetime):
                value = value.strftime('%d/%m/%Y')
            data_row.append(value)
        data_row.append(obj.get_conferences())
        writer.writerow(data_row)

    return response


class ConfUserAdmin(admin.ModelAdmin):
    """
        Custom Admin View for Conference model.
    """
    fields = ['name', 'email', 'conferences', 'role']
    list_display = ['id', 'name', 'email', 'get_conferences', 'role', 'reg_date']
    list_filter = ["conferences"]
    actions = [export_to_csv]


admin.site.site_header = 'Meet Conference Administration'
admin.site.register(Conference)
admin.site.register(Role)
admin.site.register(ConfUser, ConfUserAdmin)
