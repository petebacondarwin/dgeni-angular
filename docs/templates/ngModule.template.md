## {$ doc.name $} Module

{$ doc.description $}

### Dependencies
{% for dependency in doc.dependencies %}
* {$ dependency $}
{%- endfor %}

{% for groupName, group in doc.groups %}
{% if group.children.length %}
### [{$ group.title $}]({$ group.path $})
{% for component in group.children %}
* {$ component.name $} - {$ component.description $}
{%- endfor %}
{%- endif %}
{%- endfor %}
