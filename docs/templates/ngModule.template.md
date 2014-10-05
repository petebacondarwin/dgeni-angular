## {{ doc.name }} Module

{{ doc.description }}

### Dependencies
{% for dependency in doc.dependencies %}
* {{ dependency }}
{%- endfor %}

{% for componentType, components in doc.components %}
{% if components.length %}
### {{ componentType }}
{% for component in components %}
* {{ component.name }} - {{ component.description }}
{%- endfor %}
{%- endif %}
{%- endfor %}
